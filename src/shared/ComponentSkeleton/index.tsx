import React from "react";
import styles from "./styles.module.scss";

interface IProps {}

export default function NewComponent({}: IProps) {
  return <div className={styles.container}></div>;
}
