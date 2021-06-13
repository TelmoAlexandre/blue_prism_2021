import { Badge } from "antd";
import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  finished?: boolean;
}

export default function StatusBadge({ finished }: IProps) {
  if (finished === undefined) return null;

  return (
    <div className={styles.container}>
      {finished ? (
        <Badge status="success" text="Finished" />
      ) : (
        <Badge status="warning" text="Ongoing" />
      )}
    </div>
  );
}
