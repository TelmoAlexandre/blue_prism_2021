import { Card } from "antd";
import React from "react";

interface IProps {}

export default function ScheduleCard({}: IProps) {
  const onClick = () => {
    alert("TODO");
  };

  return (
    <Card
      size="default"
      title="Small size card"
      onClick={onClick}
      style={{ width: "100%" }}
      hoverable
    >
      <p>Card content asd asd asd as das d</p>
      <p>Card content</p>
    </Card>
  );
}
