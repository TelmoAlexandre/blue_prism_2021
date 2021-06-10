import { Card } from "antd";
import React from "react";

interface IProps {}

export default function ScheduleCard({}: IProps) {
  return (
    <Card size="small" title="Small size card" style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}
