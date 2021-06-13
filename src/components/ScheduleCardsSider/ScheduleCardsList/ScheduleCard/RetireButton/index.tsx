import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { stopPropagation } from "../../../../../utils";
import styles from "./styles.module.scss";
import { IRetireButtonParams, options } from "./types/RetireButtonTypes";

interface IProps {
  retired: boolean | undefined;
  handleRetire(): Promise<void>;
}

export default function RetireButton({ retired, handleRetire }: IProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<IRetireButtonParams | undefined>(undefined);

  useEffect(() => {
    setState(retired ? options.retired : options.active);
  }, [retired]);

  const triggerRetireHandler = async () => {
    setLoading(true);
    await handleRetire();
    setLoading(false);
  };

  if (state === undefined || retired === undefined) return null;

  return (
    <div className={styles.container} onClick={stopPropagation}>
      <Popconfirm
        title={state.popup.label}
        onConfirm={triggerRetireHandler}
        okText="Yes"
        cancelText="No"
      >
        <Button loading={!!loading} className={styles.button} type="default" size="middle">
          {!loading && <FontAwesomeIcon icon={state.button.icon} />}
          <span className={styles.label}>{state.button.label}</span>
        </Button>
      </Popconfirm>
    </div>
  );
}
