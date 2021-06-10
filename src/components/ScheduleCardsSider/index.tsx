import React from "react";
import ScheduleCardsList from "./ScheduleCardsList";
import ScheduleSearch from "./ScheduleSearch";
import styles from "./styles.module.scss";

interface IProps {}

export default function ScheduleCardsSider({}: IProps) {
  return (
    <div className={styles.container}>
      <ScheduleSearch />
      <ScheduleCardsList />
    </div>
  );
}
