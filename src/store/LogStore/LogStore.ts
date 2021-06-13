import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearch } from "../../shared/Search/types/SearchTypes";
import { SortType } from "../../shared/Sorter";
import { ILog } from "../../types/Logs";

interface ILogState {
  logs: ILog[] | undefined;
  search: ISearch;
  sort: SortType;
}

const initialState: ILogState = { logs: undefined, search: {}, sort: SortType.TitleAscending };

const logStore = createSlice({
  name: "logStore",
  initialState,
  reducers: {
    updateLogs(state, { payload }: PayloadAction<ILog[] | undefined>) {
      state.logs = payload;
    },
    updateLogsSearch(state, { payload }: PayloadAction<ISearch>) {
      state.search = payload;
    },
    updateLogsSort(state, { payload }: PayloadAction<SortType>) {
      state.sort = payload;
    },
  },
});

export const { updateLogs, updateLogsSearch, updateLogsSort } = logStore.actions;

export const logsStoreReducers = {
  logStore: logStore.reducer,
};
