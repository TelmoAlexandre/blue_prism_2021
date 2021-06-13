import { Divider } from "antd";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useAppDispatcher, useAppSelector } from "../../hooks";
import Search from "../../shared/Search";
import { ISearch } from "../../shared/Search/types/SearchTypes";
import { SortType } from "../../shared/Sorter";
import { updateScheduleSearch, updateScheduleSort } from "../../store/ScheduleStore/ScheduleStore";
import { ISchedule } from "../../types/Schedules";
import { useSchedulesApi } from "../../api/useSchedulesApi";
import ScheduleCardsList from "./ScheduleCardsList";
import { filterSchedules, sortSchedules } from "./ScheduleCardsList/utils";
import styles from "./styles.module.scss";

interface IProps {}

export default function ScheduleCardsSider({}: IProps) {
  const dispatch = useAppDispatcher();
  const [processedSchedules, setProcessedSchedules] = useState<ISchedule[] | undefined>(undefined);
  const { schedules, fetchSchedules, loading } = useSchedulesApi();
  const { search, sort } = useAppSelector(state => state.scheduleStore);

  useEffect(() => {
    fetchSchedules();
  }, []);

  useEffect(() => {
    let processedSchedules = filterSchedules(schedules, search);
    processedSchedules = sortSchedules(processedSchedules, sort);
    setProcessedSchedules(processedSchedules);
  }, [schedules, search, sort]);

  const handleSort = (type: SortType) => dispatch(updateScheduleSort(type));
  const onSearch = (search: ISearch) => dispatch(updateScheduleSearch(search));

  return (
    <div className={styles.container}>
      <Divider orientation="left">List</Divider>
      <Search onSearch={onSearch} handleSort={handleSort} />

      <Divider orientation="right">All</Divider>
      <ScheduleCardsList schedules={processedSchedules} loading={loading} />
    </div>
  );
}
