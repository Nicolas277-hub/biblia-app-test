
export interface ReadingDay {
  id: string; // Format: "monthIndex-dayIndex"
  day: number;
  reference: string;
}

export interface MonthData {
  name: string;
  days: ReadingDay[];
}

export type ProgressState = Record<string, boolean>;
