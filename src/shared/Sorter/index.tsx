import { SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.scss";

interface IProps {
  handleSort(type: SortType): void;
}

export enum SortType {
  DateDescending = 0,
  DateAscending = 1,
  TitleDescending = 2,
  TitleAscending = 3,
}

export default function Sorter({ handleSort }: IProps) {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag);
  };

  const menu: JSX.Element = (
    <Menu onClick={e => handleSort(parseInt(e.key))}>
      <Menu.ItemGroup title="Date">
        <Menu.Item key={SortType.DateAscending}>
          <SortAscendingOutlined /> Ascending
        </Menu.Item>
        <Menu.Item key={SortType.DateDescending}>
          <SortDescendingOutlined /> Descending
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup title="Title">
        <Menu.Item key={SortType.TitleAscending}>
          <SortAscendingOutlined /> Ascending
        </Menu.Item>
        <Menu.Item key={SortType.TitleDescending}>
          <SortDescendingOutlined /> Descending
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div className={styles.container}>
      <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
        <SortAscendingOutlined />
      </Dropdown>
    </div>
  );
}
