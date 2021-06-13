import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { IStatusBadgeParams, options } from "./types/StatusBadgeTypes";

interface IProps {
  retired: boolean | undefined;
  className?: string;
}

export default function StatusBadge({ retired, className }: IProps) {
  const [state, setState] = useState<IStatusBadgeParams | undefined>(undefined);

  useEffect(() => {
    setState(retired ? options.retired : options.active);
  }, [retired]);

  if (retired === undefined || state === undefined) return null;

  return (
    <div className={className}>
      <div className={styles.container}>
        <FontAwesomeIcon className={state.className} icon={state.icon} />
        <span className={styles.label}>{state.label}</span>
      </div>
    </div>
  );
}
