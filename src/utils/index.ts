import { message } from "antd";

const defaultUrl = "http://localhost:3000/";

export const getUrl = (params: string) => `${defaultUrl}${params}`;

export const showGenericErrorFeedback = () =>
  message.error("An error occurred during your request.");

export const stopPropagation = (event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
  event?.preventDefault();
  event?.stopPropagation();
};

export const sortByString = (a: string | undefined, b: string | undefined, asc: boolean) => {
  var titleA = a?.toLowerCase() ?? "";
  var titleB = b?.toLowerCase() ?? "";
  if (titleA < titleB) return asc ? -1 : 1;
  if (titleA > titleB) return asc ? 1 : -1;

  return 0;
};
