import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILogState {}

const initialState: ILogState = { test: "" };

const logStore = createSlice({
  name: "logStore",
  initialState,
  reducers: {},
});

export const {} = logStore.actions;

export const logsStoreReducers = {
  logStore: logStore.reducer,
};
