import { Table } from "antd";
import Column from "antd/lib/table/Column";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import React from "react";
import { ILog } from "../../../types/Logs";
import StatusBadge from "./StatusBadge";
import styles from "./styles.module.scss";

interface IProps {
  logs: ILog[] | undefined;
}

export default function LogsTable({ logs }: IProps) {
  if (logs === undefined) return null;

  return (
    <div className={styles.container}>
      <Table dataSource={logs} pagination={false}>
        <Column width="20%" title="Title" dataIndex="title" key="title" />
        <Column width="60%" title="Description" dataIndex="description" key="description" />
        <Column
          width="10%"
          align="center"
          title="Duration"
          dataIndex="duration"
          key="duration"
          render={(text, record: ILog) => {
            return text ? text : "-";
          }}
        />
        <Column
          width="10%"
          title="Status"
          dataIndex="finished"
          key="finished"
          render={(text, record: ILog) => <StatusBadge finished={record.finished} />}
        />
      </Table>
    </div>
  );
}
