import { Input } from "antd";
import Search from "antd/lib/input/Search";
import React, { ChangeEvent, ChangeEventHandler } from "react";
import styles from "./styles.module.scss";

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
        placeholder="Search Schedule"
        onChange={onSearch}
        bordered={false}
        allowClear
      />
    </div>
  );
}
