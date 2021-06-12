import { CalendarOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Skeleton } from "antd";
import React from "react";
import { ISchedule } from "../../../../types/ISchedule";
import RetireButton from "./RetireButton";
import styles from "./styles.module.scss";

interface IProps {
  schedule?: ISchedule | undefined;
  loading?: boolean;
}

const { Meta } = Card;

export default function ScheduleCard({ schedule, loading }: IProps) {
  const onClickCard = () => {
    alert("TODO");
  };

  const handleRetire = (event: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
    if (event !== undefined) {
      event.preventDefault();
      event.stopPropagation();
    }
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
          <RetireButton retired={schedule?.retired} handleRetire={handleRetire} />
        </div>
      </Skeleton>
    </Card>
  );
}
