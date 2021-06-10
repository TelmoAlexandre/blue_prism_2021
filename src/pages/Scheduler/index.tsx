import Layout, { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import ScheduleCardsSider from "../../components/ScheduleCardsSider";
import ScheduleLogsContent from "../../components/ScheduleLogsContent";
import CustomHeader from "./PageHeader";
import styles from "./styles.module.scss";

interface IProps {}

export default function SchedulerPage({}: IProps) {
  return (
    <Layout>
      <Header className={styles.header}>
        <CustomHeader />
      </Header>
      <Content>
        <Layout>
          <Sider>
            <ScheduleCardsSider />
          </Sider>
          <Content>
            <ScheduleLogsContent />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}
