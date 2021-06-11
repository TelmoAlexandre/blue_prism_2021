import { Button, Input } from "antd";
import Search from "antd/lib/input/Search";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import styles from "./styles.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import ScheduleSorter from "./ScheduleSorter";

interface IProps {}

export default function ScheduleSearch({}: IProps) {
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    console.log(value);
  };

  return (
    <div className={styles.container}>
      <Input
        className={styles.input}
        placeholder="Search by Title"
        prefix={<SearchOutlined style={{ color: "white" }} />}
        size="large"
        onChange={onSearch}
        bordered={false}
        allowClear
      />
      <div className={styles.sorter}>
        <ScheduleSorter />
      </div>
    </div>
  );
}
