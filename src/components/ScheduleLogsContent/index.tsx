import { Divider } from "antd";
import React from "react";
import Search from "../../shared/Search";
import { SortType } from "../../shared/Sorter";
import LogsList from "./LogsList";
import styles from "./styles.module.scss";

interface IProps {}

export default function ScheduleLogsContent({}: IProps) {
  const handleSort = (type: SortType) => {
    alert("TODO");
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert("TODO");
  };

  return (
    <div className={styles.container}>
      <Divider orientation="left">Logs</Divider>
      <div className={styles.topBar}>
        <Search className={styles.search} onSearch={onSearch} handleSort={handleSort} />
      </div>
      <LogsList />
    </div>
  );
}
