import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import { useLogsApi } from "../../api/useLogsApi";
import { useAppDispatcher, useAppSelector } from "../../hooks";
import Search from "../../shared/Search";
import { ISearch } from "../../shared/Search/types/SearchTypes";
import { SortType } from "../../shared/Sorter";
import { updateLogsSearch, updateLogsSort } from "../../store/LogStore/LogStore";
import { ILog } from "../../types/Logs";
import { ISchedule } from "../../types/Schedules";
import LogsList from "./LogsList";
import styles from "./styles.module.scss";
import { filterLogs, sortLogs } from "./utils";

interface IProps {
  schedule: ISchedule | undefined;
}

export default function ScheduleLogsContent({ schedule }: IProps) {
  const dispatch = useAppDispatcher();
  const [proccessedLogs, setProccessedLogs] = useState<ILog[] | undefined>(undefined);
  const { logs, fetchLogs, loading } = useLogsApi();
  const { search, sort } = useAppSelector(state => state.logStore);

  useEffect(() => {
    if (schedule) fetchLogs(schedule?.id);
  }, [schedule]);

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
      <div className={styles.logsList}>
        <LogsList logs={proccessedLogs} schedule={schedule} loading={loading} />
      </div>
    </div>
  );
}
