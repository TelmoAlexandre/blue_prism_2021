import React from "react";
import { ILog } from "../../../types/Logs";
import styles from "./styles.module.scss";

interface IProps {
  logs: ILog[] | undefined;
  loading?: boolean;
}

export default function LogsList({ logs, loading }: IProps) {
  return (
    <div className={styles.container}>
      {logs?.map(l => (
        <span>{l.title}</span>
      ))}
    </div>
  );
}
