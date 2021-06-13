import _ from "lodash";
import { ISearch } from "../../../shared/Search/types/SearchTypes";
import { SortType } from "../../../shared/Sorter";
import { ISchedule } from "../../../types/Schedules";
import { sortByString } from "../../../utils";

export const filterSchedules = (
  schedules: ISchedule[] | undefined,
  search: ISearch
): ISchedule[] | undefined => {
  try {
    let filteredSchedules = _.cloneDeep(schedules);
    filteredSchedules = filteredSchedules?.filter(
      s =>
        s.title?.toLowerCase().includes(search.text?.toLowerCase() ?? "") ||
        s.description?.toLowerCase().includes(search.text?.toLowerCase() ?? "")
    );
    return filteredSchedules;
  } catch (error) {
    console.error(error);
    return schedules;
  }
};

// This method allows for easy scalability
// All we need is to create a new comparative Method and call it inside the sort
// according to the SortType Enum.
export const sortSchedules = (
  schedules: ISchedule[] | undefined,
  sort: SortType
): ISchedule[] | undefined => {
  try {
    let sortedSchedules = _.cloneDeep(schedules);
    sortedSchedules = sortedSchedules?.sort((a, b) => {
      if ([SortType.TitleAscending, SortType.TitleDescending].includes(sort))
        return sortByString(a.title, b.title, sort === SortType.TitleAscending);

      return 0;
    });

    return sortedSchedules;
  } catch (error) {
    console.error(error);
    return schedules;
  }
};
