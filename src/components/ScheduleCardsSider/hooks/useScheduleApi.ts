import { useAppDispatcher, useAppSelector } from "../../../hooks";
import { updateSchedules } from "../../../store/ScheduleStore/ScheduleStore";
import { ISchedule } from "../../../types/ISchedule";
import { getUrl, showGenericErrorFeedback } from "../../../utils";

interface IUseScheduleApi {
  schedules: ISchedule[] | undefined;
  getSchedules(): Promise<void>;
}

export const useScheduleApi = (): IUseScheduleApi => {
  const dispatch = useAppDispatcher();
  const { schedules } = useAppSelector(state => state.scheduleStore);

  // This allows the component who uses this custom hook
  // to have absolute control of when, where and how many times
  // the API fetch occurs.
  const getSchedules = async (): Promise<void> => {
    const resp = await fetchSchedules();
    dispatch(updateSchedules(resp));
  };

  return { schedules, getSchedules };
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

  return undefined;
};
