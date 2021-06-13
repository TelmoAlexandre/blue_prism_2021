import { Spin } from "antd";
import React, { lazy, Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

interface IProps {}

const SchedulerPage = lazy(() => import("../pages/Scheduler"));

export default function Router({}: IProps) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <SchedulerPage />
    </Suspense>
  );
}
