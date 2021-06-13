import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { ISearch } from "../../shared/Search/types/SearchTypes";
import { SortType } from "../../shared/Sorter";
import { ISchedule } from "../../types/ISchedule";

interface IScheduleState {
  schedules: ISchedule[] | undefined;
  search: ISearch;
  sort: SortType;
}

const initialState: IScheduleState = {
  schedules: undefined,
  search: {},
  sort: SortType.TitleAscending,
};

const scheduleStore = createSlice({
  name: "scheduleStore",
  initialState,
  reducers: {
    updateSchedules(state, { payload }: PayloadAction<ISchedule[] | undefined>) {
      state.schedules = payload;
    },
    updateSchedule(state, { payload }: PayloadAction<ISchedule>) {
      const currentState = current(state);
      // Making a deep clone because I want to avoid possible implicit changes
      // to the store by changing references inside schedules.
      let schedules = _.cloneDeep(currentState.schedules);
      if (schedules) {
        const index = schedules?.findIndex(s => s.id === payload.id);
        if (~index) {
          schedules[index] = payload;
          state.schedules = schedules;
        }
      }
    },
    updateScheduleSearch(state, { payload }: PayloadAction<ISearch>) {
      state.search = payload;
    },
    updateScheduleSort(state, { payload }: PayloadAction<SortType>) {
      state.sort = payload;
    },
  },
});

export const { updateSchedules, updateSchedule, updateScheduleSearch, updateScheduleSort } =
  scheduleStore.actions;

export const scheduleStoreReducers = {
  scheduleStore: scheduleStore.reducer,
};
