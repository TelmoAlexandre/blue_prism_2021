import { SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.scss";

interface IProps {
  handleSort(type: SortType): void;
}

export enum SortType {
  TitleDescending = 0,
  TitleAscending = 1,
}

export default function Sorter({ handleSort }: IProps) {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (flag: boolean) => {
    setVisible(flag);
  };

  const menu: JSX.Element = (
    <Menu onClick={e => handleSort(parseInt(e.key))}>
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
