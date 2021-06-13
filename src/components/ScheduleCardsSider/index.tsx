import { Divider } from "antd";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useAppDispatcher, useAppSelector } from "../../hooks";
import Search from "../../shared/Search";
import { ISearch } from "../../shared/Search/types/SearchTypes";
import { SortType } from "../../shared/Sorter";
import { updateScheduleSearch } from "../../store/ScheduleStore/ScheduleStore";
import { ISchedule } from "../../types/ISchedule";
import { useScheduleApi } from "./hooks/useScheduleApi";
import ScheduleCardsList from "./ScheduleCardsList";
import styles from "./styles.module.scss";

interface IProps {}

export default function ScheduleCardsSider({}: IProps) {
  const dispatch = useAppDispatcher();
  const [filteredSchedules, setFilteredSchedules] = useState<ISchedule[] | undefined>(undefined);
  const { schedules, getSchedules, loading } = useScheduleApi();
  const { search } = useAppSelector(state => state.scheduleStore);

  useEffect(() => {
    getSchedules();
  }, []);

  useEffect(() => {
    let filteredSchedules = _.cloneDeep(schedules);
    filteredSchedules = filteredSchedules?.filter(
      s =>
        s.title?.toLowerCase().includes(search.text?.toLowerCase() ?? "") ||
        s.description?.toLowerCase().includes(search.text?.toLowerCase() ?? "")
    );
    setFilteredSchedules(filteredSchedules);
  }, [search, schedules]);

  const handleSort = (type: SortType) => {
    alert("TODO");
  };

  const onSearch = (search: ISearch) => dispatch(updateScheduleSearch(search));

  return (
    <div className={styles.container}>
      <Divider orientation="left">List</Divider>
      <Search onSearch={onSearch} handleSort={handleSort} />

      <Divider orientation="right">All</Divider>
      <ScheduleCardsList schedules={filteredSchedules} loading={loading} />
    </div>
  );
}
