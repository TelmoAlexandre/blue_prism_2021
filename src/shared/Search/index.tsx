import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { ChangeEvent } from "react";
import ScheduleSorter, { SortType } from "../Sorter";
import styles from "./styles.module.scss";

interface IProps {
  className?: string;
  onSearch(e: ChangeEvent<HTMLInputElement>): void;
  handleSort(type: SortType): void;
}

export default function Search({ className, onSearch, handleSort }: IProps) {
  return (
    <div className={`${styles.container} ${className}`}>
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
        <ScheduleSorter handleSort={handleSort} />
      </div>
    </div>
  );
}
