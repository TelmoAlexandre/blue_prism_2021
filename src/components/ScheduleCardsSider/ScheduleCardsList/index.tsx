import React, { useEffect, useState } from "react";
import ScheduleCard from "./ScheduleCard";

interface IProps {}

export default function ScheduleCardsList({}: IProps) {
  const [cardsLoading, setCardsLoading] = useState(true);

  useEffect(() => {
    setCardsLoading(false);
  }, []);

  const test = [0, 0, 0, 0, 0];
  return (
    <>
      {test.map(i => (
        <ScheduleCard loading={cardsLoading} />
      ))}
    </>
  );
}
