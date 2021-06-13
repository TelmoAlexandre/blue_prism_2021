import { Spin } from "antd";
import React from "react";
import styles from "./styles.module.scss";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined spin />;

export default function LoadingPage() {
  return (
    <div className={styles.container}>
      <Spin className={styles.spin} size="large" indicator={antIcon} />
      <p className={styles.label}>Loading...</p>
    </div>
  );
}
