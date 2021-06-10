import React from "react";
import ScheduleCard from "./ScheduleCard";
interface IProps {}

export default function ScheduleCardsSider({}: IProps) {
  const test = [0, 0, 0, 0, 0];

  return (
    <>
      {test.map(i => (
        <ScheduleCard />
      ))}
    </>
  );
}
