import { EmployeeDetails } from "@/types";

export const initialFormState: EmployeeDetails = {
  email: '',
  firstName: '',
  lastName: '',
  avatar: '',
  id: null,
};

export type EmployeeFormAction =
  | { type: 'SET_FIELD'; field: keyof EmployeeDetails; value: string }
  | { type: 'RESET_FORM' }
  | { type: 'SET_FORM'; payload: EmployeeDetails };


export const employeeFormReducer = (state: EmployeeDetails, action: EmployeeFormAction): EmployeeDetails => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET_FORM':
      return initialFormState;
    case 'SET_FORM':
      return action.payload;
    default:
      return state;
  }
};
