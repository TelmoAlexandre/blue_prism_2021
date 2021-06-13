import Layout, { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import ScheduleCardsSider from "../../components/ScheduleCardsSider";
import ScheduleLogsContent from "../../components/ScheduleLogsContent";
import { useAppSelector } from "../../hooks";
import CustomHeader from "../../shared/CustomHeader";
import styles from "./styles.module.scss";

interface IProps {}

export default function SchedulerPage({}: IProps) {
  const { selectedScheduleId } = useAppSelector(state => state.scheduleStore);

  return (
    <Layout>
      <Header className={styles.header}>
        <CustomHeader />
      </Header>
      <Content>
        <div className={styles.content}>
          <div className={styles.schedules}>
            <ScheduleCardsSider />
          </div>
          <div className={styles.logs}>
            <ScheduleLogsContent scheduleId={selectedScheduleId} />
          </div>
        </div>
      </Content>
    </Layout>
  );
}
