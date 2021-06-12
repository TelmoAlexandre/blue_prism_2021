import { createSlice } from "@reduxjs/toolkit";

interface IScheduleState {}

const initialState: IScheduleState = {};

const scheduleStore = createSlice({
  name: "scheduleStore",
  initialState,
  reducers: {},
});

export const {} = scheduleStore.actions;

export const scheduleStoreReducers = {
  scheduleStore: scheduleStore.reducer,
};
