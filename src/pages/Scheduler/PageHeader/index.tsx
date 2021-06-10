import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageHeader } from "antd";
import React from "react";
import styles from "./styles.module.scss";

interface IProps {}

export default function CustomHeader({}: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Schedules</h1>
      </div>
      <div className={styles.right}>
        <FontAwesomeIcon className={styles.barsIcon} icon={faBars} />
      </div>
    </div>
  );
}
