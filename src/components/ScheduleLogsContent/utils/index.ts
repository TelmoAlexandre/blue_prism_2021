import _ from "lodash";
import { ISearch } from "../../../shared/Search/types/SearchTypes";
import { SortType } from "../../../shared/Sorter";
import { ILog } from "../../../types/Logs";
import { sortByString } from "../../../utils";

export const filterLogs = (logs: ILog[] | undefined, search: ISearch): ILog[] | undefined => {
  try {
    let filteredLogs = _.cloneDeep(logs);
    filteredLogs = filteredLogs?.filter(
      l =>
        l.title?.toLowerCase().includes(search.text?.toLowerCase() ?? "") ||
        l.description?.toLowerCase().includes(search.text?.toLowerCase() ?? "")
    );
    return filteredLogs;
  } catch (error) {
    console.error(error);
    return logs;
  }
};

// This method allows for easy scalability
// All we need is to create a new comparative Method and call it inside the sort
// according to the SortType Enum.
export const sortLogs = (logs: ILog[] | undefined, sort: SortType): ILog[] | undefined => {
  try {
    let sortedLogs = _.cloneDeep(logs);
    sortedLogs = sortedLogs?.sort((a, b) => {
      if ([SortType.TitleAscending, SortType.TitleDescending].includes(sort))
        return sortByString(a.title, b.title, sort === SortType.TitleAscending);

      return 0;
    });

    return sortedLogs;
  } catch (error) {
    console.error(error);
    return logs;
  }
};
