import Layout, { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import ScheduleCardsSider from "../../components/ScheduleCardsSider";
import ScheduleLogsContent from "../../components/ScheduleLogsContent";
import { useAppSelector } from "../../hooks";
import CustomHeader from "../../shared/CustomHeader";
import { ISchedule } from "../../types/Schedules";
import styles from "./styles.module.scss";

interface IProps {}

export default function SchedulerPage({}: IProps) {
  const { selectedScheduleId, schedules } = useAppSelector(state => state.scheduleStore);
  const [selectedSchedule, setSelectedSchedule] = useState<ISchedule | undefined>(undefined);

  useEffect(() => {
    if (selectedScheduleId) {
      const selectedSchedule = schedules?.find(s => s.id === selectedScheduleId);
      setSelectedSchedule(selectedSchedule);
    }
  }, [selectedScheduleId]);

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
            <ScheduleLogsContent schedule={selectedSchedule} />
          </div>
        </div>
      </Content>
    </Layout>
  );
}
