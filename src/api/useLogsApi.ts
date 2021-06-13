import { useState } from "react";
import { useAppDispatcher, useAppSelector } from "../hooks";
import { updateLogs } from "../store/LogStore/LogStore";
import { ILog } from "../types/Logs";
import { getUrl, showGenericErrorFeedback } from "../utils";

interface IUseLogsApi {
  logs: ILog[] | undefined;
  fetchLogs(scheduleId: number | undefined): Promise<ILog[] | undefined>;
  loading: boolean;
}

export const useLogsApi = (): IUseLogsApi => {
  const dispatch = useAppDispatcher();
  const { logs } = useAppSelector(state => state.logStore);
  const [loading, setLoading] = useState(false);

  // This allows the component who uses this custom hook
  // to have absolute control of when, where and how many times
  // the API fetch occurs.
  const fetchLogs = async (scheduleId: number | undefined): Promise<ILog[] | undefined> => {
    if (scheduleId === undefined) return undefined;

    setLoading(true);
    const resp = await fetchLogsRequest(scheduleId);
    dispatch(updateLogs(resp));
    setLoading(false);

    return logs;
  };

  return { logs, fetchLogs, loading };
};

const fetchLogsRequest = async (scheduleId: number): Promise<ILog[] | undefined> => {
  try {
    const url = getUrl(`logs?scheduleId=${scheduleId}`);
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
