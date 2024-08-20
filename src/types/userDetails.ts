import { GridRowId } from "@mui/x-data-grid";

/* eslint-disable camelcase */
export type UserDetailsTypes = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: EmployeeDetails[]
}

export type EmployeeDetails = {
  id?: GridRowId;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}
