import { Button, Popconfirm } from "antd";
import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  handleRetire(event: React.MouseEvent<HTMLElement, MouseEvent> | undefined): void;
}

export default function RetireButton({ handleRetire }: IProps) {
  const onCancel = (event: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
    if (event !== undefined) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <div className={styles.container}>
      <Popconfirm
        title="Are you sure you want to retire this Schedule?"
        onConfirm={handleRetire}
        onCancel={onCancel}
        okText="Yes"
        cancelText="No"
      >
        <Button type="default" size="small" onClick={handleRetire}>
          Retire
        </Button>
      </Popconfirm>
    </div>
  );
}
