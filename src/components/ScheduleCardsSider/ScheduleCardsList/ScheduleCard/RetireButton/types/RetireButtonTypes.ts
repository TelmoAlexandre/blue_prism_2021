import { faArchive, faHistory, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IRetireButtonParams {
  popup: {
    label: string;
  };
  button: {
    label: string;
    icon: IconDefinition;
  };
}

export interface IStatusBadge {
  active: IRetireButtonParams;
  retired: IRetireButtonParams;
}

export const options: IStatusBadge = {
  active: {
    popup: {
      label: "Are you sure you want to retire this Schedule",
    },
    button: {
      label: "Retire",
      icon: faArchive,
    },
  },
  retired: {
    popup: {
      label: "Are you sure you want to unretire this Schedule",
    },
    button: {
      label: "Unretire",
      icon: faHistory,
    },
  },
};
