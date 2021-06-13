import { Divider, Skeleton } from "antd";
import React from "react";
import LoadingPage from "../../../pages/LoadingPage";
import { ILog } from "../../../types/Logs";
import { ISchedule } from "../../../types/Schedules";
import LogsTable from "../LogsTable";
import styles from "./styles.module.scss";

interface IProps {
  logs: ILog[] | undefined;
  schedule: ISchedule | undefined;
  loading?: boolean;
}

export default function LogsList({ logs, schedule, loading }: IProps) {
  return (
    <div className={styles.container}>
      {schedule && <Divider orientation="right">{schedule?.title}</Divider>}
      <>{loading ? <LoadingPage /> : <>{logs && <LogsTable logs={logs} />}</>}</>
    </div>
  );
}
