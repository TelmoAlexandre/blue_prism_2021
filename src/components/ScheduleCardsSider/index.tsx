import { Divider } from "antd";
import React from "react";
import Search from "../../shared/Search";
import { SortType } from "../../shared/Sorter";
import ScheduleCardsList from "./ScheduleCardsList";
import styles from "./styles.module.scss";

interface IProps {}

export default function ScheduleCardsSider({}: IProps) {
  const handleSort = (type: SortType) => {
    alert("TODO");
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert("TODO");
  };

  return (
    <div className={styles.container}>
      <Divider orientation="left">List</Divider>
      <Search onSearch={onSearch} handleSort={handleSort} />
      <Divider orientation="right">All</Divider>
      <ScheduleCardsList />
    </div>
  );
}
