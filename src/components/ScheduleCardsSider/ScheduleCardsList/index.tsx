import _ from "lodash";
import React from "react";
import { ISchedule } from "../../../types/ISchedule";
import ScheduleCard from "./ScheduleCard";

interface IProps {
  schedules: ISchedule[] | undefined;
  loading?: boolean;
}

export default function ScheduleCardsList({ schedules, loading }: IProps) {
  // 5 dummy Cards to represent Card Loading
  const getDummySkeletonLoading = () => _.times(5, () => <ScheduleCard schedule={undefined} />);

  return (
    <>
      {schedules !== undefined
        ? schedules?.map(schedule => <ScheduleCard schedule={schedule} loading={loading} />)
        : getDummySkeletonLoading()}
    </>
  );
}
