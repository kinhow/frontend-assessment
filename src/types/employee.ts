import { EmployeeDetails } from "./userDetails";
import { GridRowId, GridRowModel, GridRowModesModel } from '@mui/x-data-grid';

export interface EmployeeState {
  employees: EmployeeDetails[];
  rowModes: GridRowModesModel;
  initialize: (employees: EmployeeDetails[]) => void;
  add: (employee: EmployeeDetails) => void;
  update: (id: GridRowId, updates: Partial<EmployeeDetails>) => void;
  remove: (id: GridRowId) => void;
  startEditing: (id: GridRowId) => void;
  saveChanges: (id: GridRowId) => void;
  cancelEditing: (id: GridRowId) => void;
  updateRow: (newRow: GridRowModel) => void;
}
