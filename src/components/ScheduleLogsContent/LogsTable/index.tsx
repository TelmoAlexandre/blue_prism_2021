import { Table } from "antd";
import Column from "antd/lib/table/Column";
import React from "react";
import { ILog } from "../../../types/Logs";
import { ISchedule } from "../../../types/Schedules";
import StatusBadge from "./StatusBadge";
import styles from "./styles.module.scss";

interface IProps {
  logs: ILog[] | undefined;
}

export default function LogsTable({ logs }: IProps) {
  return (
    <div className={styles.container}>
      <Table dataSource={logs} pagination={false}>
        <Column width="20%" title="Title" dataIndex="title" key="title" />
        <Column
          width="60%"
          title="Description"
          dataIndex="description"
          key="description"
          render={text => {
            return text ? text : "-";
          }}
        />
        <Column
          width="10%"
          align="center"
          title="Duration"
          dataIndex="duration"
          key="duration"
          render={text => {
            return text ? text : "-";
          }}
        />
        <Column
          width="10%"
          title="Status"
          align="center"
          dataIndex="finished"
          key="finished"
          render={(text, record: ILog) => <StatusBadge finished={record.finished} />}
          filters={[
            { text: "Finished", value: true },
            { text: "OnGoing", value: false },
          ]}
          onFilter={(value, record) => record.finished === value}
        />
      </Table>
    </div>
  );
}
