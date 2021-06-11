import { Divider } from "antd";
import React from "react";
import ScheduleCardsList from "./ScheduleCardsList";
import ScheduleSearch from "./ScheduleSearch";
import styles from "./styles.module.scss";

interface IProps {}

export default function ScheduleCardsSider({}: IProps) {
  return (
    <div className={styles.container}>
      <Divider orientation="left">Schedules</Divider>
      <ScheduleSearch />
      <Divider orientation="right">All</Divider>
      <ScheduleCardsList />
    </div>
  );
}
