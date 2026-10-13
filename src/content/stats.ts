export type Stat = {
  id: string;
  label: string;
  value: string;
  note: string;
  pending: boolean;
};

export const stats: Stat[] = [
  {
    id: "export-aim",
    label: "Export aim",
    value: "80–90%",
    note: "Share of production intended for export, from the project brief. Measured volumes are still to be confirmed.",
    pending: false,
  },
  {
    id: "acreage",
    label: "Acreage",
    value: "To be confirmed",
    note: "Farm area will be published once Havilah Agro confirms it.",
    pending: true,
  },
  {
    id: "volume",
    label: "Export volume",
    value: "To be confirmed",
    note: "Seasonal export volumes will be published once they are confirmed.",
    pending: true,
  },
  {
    id: "seasons",
    label: "Seasons",
    value: "To be confirmed",
    note: "Harvest windows will be published with the product list.",
    pending: true,
  },
];
