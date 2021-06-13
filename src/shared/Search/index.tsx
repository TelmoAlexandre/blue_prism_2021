import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import ScheduleSorter, { SortType } from "../Sorter";
import styles from "./styles.module.scss";
import { ISearch } from "./types/SearchTypes";

interface IProps {
  className?: string;
  onSearch(search: ISearch): void;
  handleSort(type: SortType): void;
}

export default function Search({ className, onSearch, handleSort }: IProps) {
  const [search, setSearch] = useState<ISearch>({});

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <div className={`${styles.container} ${className}`}>
      <Input
        className={styles.input}
        placeholder="Search by Title or Description"
        prefix={<SearchOutlined style={{ color: "white" }} />}
        size="large"
        onChange={e => setSearch({ text: e.target.value })}
        bordered={false}
        allowClear
      />
      <div className={styles.sorter}>
        <ScheduleSorter handleSort={handleSort} />
      </div>
    </div>
  );
}
