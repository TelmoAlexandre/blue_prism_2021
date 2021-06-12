import { message } from "antd";
const defaultUrl = "http://localhost:3000/";

export const getUrl = (params: string) => {
  return `${defaultUrl}${params}`;
};

export const showGenericErrorFeedback = () =>
  message.error("An error occurred during your request.");
