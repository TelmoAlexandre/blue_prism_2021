import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  },
});

export const { updateSchedules } = scheduleStore.actions;

export const scheduleStoreReducers = {
  scheduleStore: scheduleStore.reducer,
};
