import { useState } from "react";
import { useAppDispatcher, useAppSelector } from "../hooks";
import { updateSchedule, updateSchedules } from "../store/ScheduleStore/ScheduleStore";
import { ISchedule } from "../types/Schedules";
import { getUrl, showGenericErrorFeedback } from "../utils";

interface IUseSchedulesApi {
  schedules: ISchedule[] | undefined;
  fetchSchedules(): Promise<ISchedule[] | undefined>;
  changeRetire(id: number | undefined, retire: boolean | undefined): Promise<boolean>;
  loading: boolean;
}

export const useSchedulesApi = (): IUseSchedulesApi => {
  const dispatch = useAppDispatcher();
  const { schedules } = useAppSelector(state => state.scheduleStore);
  const [loading, setLoading] = useState(false);

  // This allows the component who uses this custom hook
  // to have absolute control of when, where and how many times
  // the API fetch occurs.
  const fetchSchedules = async (): Promise<ISchedule[] | undefined> => {
    setLoading(true);
    const resp = await fetchSchedulesRequest();
    dispatch(updateSchedules(resp));
    setLoading(false);

    return schedules;
  };

  const changeRetire = async (
    id: number | undefined,
    retire: boolean | undefined
  ): Promise<boolean> => {
    if (id === undefined || retire === undefined) return false;

    const resp = await patchRetire(id, retire);
    if (resp === undefined) return false;

    dispatch(updateSchedule(resp));
    return true;
  };

  return { schedules, fetchSchedules, loading, changeRetire };
};

const fetchSchedulesRequest = async (): Promise<ISchedule[] | undefined> => {
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

const patchRetire = async (id: number, retire: boolean): Promise<ISchedule | undefined> => {
  try {
    const url = getUrl(`schedules/${id}`);
    const toChange: ISchedule = { retired: retire };
    const reqInit: RequestInit = {
      method: "PATCH",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toChange),
    };

    const resp = await fetch(url, reqInit);

    if ([200, 201, 204].includes(resp.status)) {
      return resp.json();
    }
  } catch (error) {
    console.error(error);
    showGenericErrorFeedback();
  }

  return undefined;
};
