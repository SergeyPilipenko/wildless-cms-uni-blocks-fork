import type { IconName } from '../../icons/IconName';

export type WorkSchedule = {
  workTime: string;
  lunchHour: string;
  workTimeSaturday: string;
  lunchHourSaturday: string;
  workingMonday: boolean;
  workingTuesday: boolean;
  workingWednesday: boolean;
  workingThursday: boolean;
  workingFriday: boolean;
  workingSaturday: boolean;
  workingSunday: boolean;
};

export interface OfficeMapProps {
  name?: string;
  address: string;
  workSchedule: WorkSchedule;
  gpsLatitude?: number;
  gpsLongitude?: number;
}

export type WorkScheduleWeek = {
  title?: string;
  status?: boolean;
  workTime?: string;
  lunchHour?: string;
  description?: string;
};

export type NearbyOffices = {
  title?: string;
  time?: string;
  distance?: string;
  icon?: IconName;
};
