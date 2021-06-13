import { message } from "antd";
const defaultUrl = "http://localhost:3000/";

export const getUrl = (params: string) => `${defaultUrl}${params}`;

export const showGenericErrorFeedback = () =>
  message.error("An error occurred during your request.");

export const stopPropagation = (event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
  event?.preventDefault();
  event?.stopPropagation();
};
