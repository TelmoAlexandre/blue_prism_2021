import { Drawer } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import React, { useCallback, useEffect, useState } from "react";
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
  const [logsDrawerVisible, setLogsDrawerVisible] = useState(false);
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedScheduleId) {
      const selectedSchedule = schedules?.find(s => s.id === selectedScheduleId);
      setSelectedSchedule(selectedSchedule);
      openLogDrawerIfSmallScreen();
    }
  }, [selectedScheduleId]);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  const openLogDrawerIfSmallScreen = useCallback(() => {
    if (innerWidth < 1000) setLogsDrawerVisible(true);
  }, [innerWidth]);

  return (
    <Layout>
      <Header className={styles.header}>
        <CustomHeader setLogsDrawerVisible={setLogsDrawerVisible} />
      </Header>
      <Content>
        <div className={styles.content}>
          <div className={styles.schedules}>
            <ScheduleCardsSider onCardClickCallback={openLogDrawerIfSmallScreen} />
          </div>
          <div className={styles.logs}>
            <ScheduleLogsContent schedule={selectedSchedule} />
          </div>

          {/* Drawer to show Logs when viewport is less than 1000px */}
          <Drawer
            visible={logsDrawerVisible}
            width={"90vw"}
            onClose={() => setLogsDrawerVisible(false)}
          >
            <div className={styles.drawer}>
              <ScheduleLogsContent schedule={selectedSchedule} />
            </div>
          </Drawer>
        </div>
      </Content>
    </Layout>
  );
}
