import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { ISchedule } from "../../types/ISchedule";

interface IScheduleState {
  schedules: ISchedule[] | undefined;
}

const initialState: IScheduleState = {
  schedules: undefined,
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
  },
});

export const { updateSchedules, updateSchedule } = scheduleStore.actions;

export const scheduleStoreReducers = {
  scheduleStore: scheduleStore.reducer,
};
