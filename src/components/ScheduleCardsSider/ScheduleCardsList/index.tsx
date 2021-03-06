import _ from "lodash";
import React from "react";
import { useAppSelector } from "../../../hooks";
import { ISchedule } from "../../../types/Schedules";
import ScheduleCard from "./ScheduleCard";

interface IProps {
  schedules: ISchedule[] | undefined;
  loading?: boolean;
  onCardClickCallback?(): void;
}

export default function ScheduleCardsList({ schedules, loading, onCardClickCallback }: IProps) {
  const { selectedScheduleId } = useAppSelector(state => state.scheduleStore);

  // 3 dummy Cards to represent Card Loading
  const dummySkeletonLoading = _.times(3, index => (
    <ScheduleCard key={index} schedule={undefined} />
  ));

  return (
    <>
      {schedules !== undefined
        ? schedules?.map(schedule => (
            <ScheduleCard
              key={schedule.id}
              schedule={schedule}
              loading={loading}
              selected={schedule.id === selectedScheduleId}
              onCardClickCallback={onCardClickCallback}
            />
          ))
        : dummySkeletonLoading}
    </>
  );
}
