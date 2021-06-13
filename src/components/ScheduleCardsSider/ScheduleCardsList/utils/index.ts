import _ from "lodash";
import { ISearch } from "../../../../shared/Search/types/SearchTypes";
import { SortType } from "../../../../shared/Sorter";
import { ISchedule } from "../../../../types/ISchedule";

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
        return sortByTitle(a, b, sort);

      return 0;
    });

    return sortedSchedules;
  } catch (error) {
    console.error(error);
    return schedules;
  }
};

const sortByTitle = (a: ISchedule, b: ISchedule, sort: SortType) => {
  const asc = sort === SortType.TitleAscending;

  var titleA = a.title?.toLowerCase() ?? "";
  var titleB = b.title?.toLowerCase() ?? "";
  if (titleA < titleB) return asc ? -1 : 1;
  if (titleA > titleB) return asc ? 1 : -1;

  return 0;
};
