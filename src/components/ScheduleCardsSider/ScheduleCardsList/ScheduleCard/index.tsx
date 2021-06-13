import { CalendarOutlined } from "@ant-design/icons";
import { Card, message, Skeleton } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useSchedulesApi } from "../../../../api/useSchedulesApi";
import { useAppDispatcher } from "../../../../hooks";
import { updateSelectedScheduleId } from "../../../../store/ScheduleStore/ScheduleStore";
import { ISchedule } from "../../../../types/Schedules";
import RetireButton from "./RetireButton";
import StatusBadge from "./StatusBadge";
import styles from "./styles.module.scss";

interface IProps {
  schedule?: ISchedule | undefined;
  loading?: boolean;
  selected?: boolean;
}

const { Meta } = Card;

export default function ScheduleCard({ schedule, loading, selected }: IProps) {
  const dispatch = useAppDispatcher();
  const [cardClassName, setCardClassName] = useState<string>(styles.card);
  const { changeRetire } = useSchedulesApi();

  const onClickCard = () => dispatch(updateSelectedScheduleId(schedule?.id));

  const handleRetire = async (): Promise<void> => {
    const resp = await changeRetire(schedule?.id, !!!schedule?.retired);
    if (resp) message.success("Schedule state changed with success.");
  };

  useEffect(() => {
    setCardClassName(`${styles.card} ${selected ? styles.selected : ""}`);
  }, [selected]);

  return (
    <Card className={cardClassName} size="default" onClick={onClickCard} style={{ width: "100%" }}>
      <Skeleton loading={loading || schedule === undefined} avatar active>
        <Meta className={styles.meta} avatar={<CalendarOutlined />} title={schedule?.title} />
        <p className={styles.description}>{schedule?.description}</p>

        <div className={styles.footer}>
          <StatusBadge className={styles.statusBadge} retired={schedule?.retired} />
          <RetireButton retired={schedule?.retired} handleRetire={handleRetire} />
        </div>
      </Skeleton>
    </Card>
  );
}
