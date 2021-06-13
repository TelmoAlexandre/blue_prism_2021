import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  setLogsDrawerVisible(visible: boolean): void;
}

export default function CustomHeader({ setLogsDrawerVisible }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Schedules</h1>
      </div>
      <div className={styles.right}>
        <FontAwesomeIcon
          className={styles.barsIcon}
          icon={faBars}
          onClick={() => setLogsDrawerVisible(true)}
        />
      </div>
    </div>
  );
}
