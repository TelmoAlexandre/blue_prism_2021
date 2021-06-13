import { Divider, message } from "antd";
import React, { useEffect, useState } from "react";
import { useLogsApi } from "../../api/useLogsApi";
import { useAppDispatcher, useAppSelector } from "../../hooks";
import Search from "../../shared/Search";
import { ISearch } from "../../shared/Search/types/SearchTypes";
import { SortType } from "../../shared/Sorter";
import { updateLogsSearch, updateLogsSort } from "../../store/LogStore/LogStore";
import { ILog } from "../../types/Logs";
import LogsList from "./LogsList";
import styles from "./styles.module.scss";
import { filterLogs, sortLogs } from "./utils";

interface IProps {
  scheduleId: number | undefined;
}

export default function ScheduleLogsContent({ scheduleId }: IProps) {
  const dispatch = useAppDispatcher();
  const [proccessedLogs, setProccessedLogs] = useState<ILog[] | undefined>(undefined);
  const { logs, fetchLogs, loading } = useLogsApi();
  const { search, sort } = useAppSelector(state => state.logStore);

  useEffect(() => {
    const handleLogFetch = async () => {
      const hide = message.loading("Loading..", 0);
      await fetchLogs(scheduleId);
      hide();
    };

    if (scheduleId) handleLogFetch();
  }, [scheduleId]);

  useEffect(() => {
    if (logs) {
      let proccessedLogs = filterLogs(logs, search);
      proccessedLogs = sortLogs(proccessedLogs, sort);
      setProccessedLogs(proccessedLogs);
    }
  }, [logs, search, sort]);

  const handleSort = (type: SortType) => dispatch(updateLogsSort(type));
  const onSearch = (search: ISearch) => dispatch(updateLogsSearch(search));

  return (
    <div className={styles.container}>
      <Divider orientation="left">Logs</Divider>
      <div className={styles.topBar}>
        <Search className={styles.search} onSearch={onSearch} handleSort={handleSort} />
      </div>
      {scheduleId && <LogsList logs={proccessedLogs} loading={loading} />}
    </div>
  );
}
