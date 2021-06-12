import { useState } from "react";
import { useAppDispatcher, useAppSelector } from "../../../hooks";
import { updateSchedules } from "../../../store/ScheduleStore/ScheduleStore";
import { ISchedule } from "../../../types/ISchedule";
import { getUrl, showGenericErrorFeedback } from "../../../utils";

interface IUseScheduleApi {
  schedules: ISchedule[] | undefined;
  getSchedules(): Promise<void>;
  loading: boolean;
}

export const useScheduleApi = (): IUseScheduleApi => {
  const dispatch = useAppDispatcher();
  const { schedules } = useAppSelector(state => state.scheduleStore);
  const [loading, setLoading] = useState(false);

  // This allows the component who uses this custom hook
  // to have absolute control of when, where and how many times
  // the API fetch occurs.
  const getSchedules = async (): Promise<void> => {
    setLoading(true);
    const resp = await fetchSchedules();
    setLoading(false);

    dispatch(updateSchedules(resp));
  };

  return { schedules, getSchedules, loading };
};

const fetchSchedules = async (): Promise<ISchedule[] | undefined> => {
  try {
    const url = getUrl("schedules");
    const resp = await fetch(url);

    if ([200, 201].includes(resp.status)) {
      return resp.json();
    }
  } catch (error) {
    console.error(error);
    showGenericErrorFeedback();
  }

  return [];
};
