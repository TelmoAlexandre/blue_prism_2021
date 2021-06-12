import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logsStoreReducers } from "./LogStore/LogStore";
import { scheduleStoreReducers } from "./ScheduleStore/ScheduleStore";

const reducer = { ...logsStoreReducers, ...scheduleStoreReducers };
const store = configureStore({ reducer, middleware: getDefaultMiddleware() });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
