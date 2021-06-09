import React, { lazy, Suspense } from "react";

interface IProps {}

const LoginPage = lazy(() => import("../pages/Login"));
const SchedulerPage = lazy(() => import("../pages/Scheduler"));

export default function Router({}: IProps) {
  return (
    <Suspense fallback={<></>}>
      <LoginPage />
      <SchedulerPage />
    </Suspense>
  );
}
