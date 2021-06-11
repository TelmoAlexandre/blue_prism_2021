import { CalendarOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Skeleton } from "antd";
import React from "react";
import RetireButton from "./RetireButton";
import styles from "./styles.module.scss";

interface IProps {
  loading: boolean;
}

const { Meta } = Card;

export default function ScheduleCard({ loading }: IProps) {
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
      <Skeleton loading={loading} avatar active>
        <Meta className={styles.meta} avatar={<CalendarOutlined />} title="Card title" />
        <p>Card content</p>
        <p>Card content asd asd asd as das d</p>
        <p>Card content</p>

        <div className={styles.footer}>
          <RetireButton handleRetire={handleRetire} />
        </div>
      </Skeleton>
    </Card>
  );
}
