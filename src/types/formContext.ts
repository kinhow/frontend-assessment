import { Dispatch } from "react";
import { EmployeeDetails } from ".";
import { EmployeeFormAction } from "@/reducer/employeeForm";

export type EmployeeStateContext = {
  dispatch: Dispatch<EmployeeFormAction>;
  state: EmployeeDetails;
};
