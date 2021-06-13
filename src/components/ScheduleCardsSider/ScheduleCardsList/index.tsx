import _ from "lodash";
import React from "react";
import { ISchedule } from "../../../types/Schedules";
import ScheduleCard from "./ScheduleCard";

interface IProps {
  schedules: ISchedule[] | undefined;
  loading?: boolean;
}

export default function ScheduleCardsList({ schedules, loading }: IProps) {
  // 3 dummy Cards to represent Card Loading
  const dummySkeletonLoading = _.times(3, () => <ScheduleCard schedule={undefined} />);

  return (
    <>
      {schedules !== undefined
        ? schedules?.map(schedule => <ScheduleCard schedule={schedule} loading={loading} />)
        : dummySkeletonLoading}
    </>
  );
}
