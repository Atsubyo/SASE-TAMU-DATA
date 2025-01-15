export interface AttendanceHistory {
  event_name: string;
  attended: boolean;
  //timestamp: string | null;
}

export interface AttendanceApiResponse {
  full_name: string;
  AHC: AttendanceHistory[];
}
