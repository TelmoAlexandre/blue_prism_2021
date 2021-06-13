import { faArchive, faCheck, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles.module.scss";

export interface IStatusBadgeParams {
  label: string;
  icon: IconDefinition;
  className?: string;
}

export interface IStatusBadge {
  active: IStatusBadgeParams;
  retired: IStatusBadgeParams;
}

export const options: IStatusBadge = {
  active: {
    label: "Active",
    icon: faCheck,
    className: styles.active,
  },
  retired: {
    label: "Archived",
    icon: faArchive,
    className: styles.retired,
  },
};
