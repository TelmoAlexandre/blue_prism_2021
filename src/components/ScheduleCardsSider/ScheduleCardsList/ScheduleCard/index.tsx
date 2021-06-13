import { CalendarOutlined } from "@ant-design/icons";
import { Card, message, Skeleton } from "antd";
import React from "react";
import { ISchedule } from "../../../../types/ISchedule";
import { useScheduleApi } from "../../hooks/useScheduleApi";
import RetireButton from "./RetireButton";
import StatusBadge from "./StatusBadge";
import styles from "./styles.module.scss";

interface IProps {
  schedule?: ISchedule | undefined;
  loading?: boolean;
}

const { Meta } = Card;

export default function ScheduleCard({ schedule, loading }: IProps) {
  const { changeRetire } = useScheduleApi();

  const onClickCard = () => {
    alert("TODO");
  };

  const handleRetire = async (): Promise<void> => {
    const resp = await changeRetire(schedule?.id, !!!schedule?.retired);
    if (resp) message.success("Schedule state changed with success.");
  };

  return (
    <Card
      className={styles.card}
      size="default"
      onClick={onClickCard}
      style={{ width: "100%" }}
      hoverable
    >
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
