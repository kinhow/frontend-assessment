import { create } from 'zustand';
import { GridRowModes } from '@mui/x-data-grid';
import { EmployeeState, EmployeeDetails } from '@/types';

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [],
  rowModes: {},

  initialize: (employees) => set(() => ({ employees })),

  add: (employee) => set((state) => ({
    employees: [...state.employees, employee],
  })),

  update: (id, updatedEmployee) => set((state) => ({
    employees: state.employees.map(emp =>
      emp.id === id ? { ...emp, ...updatedEmployee } : emp
    ),
    rowModes: {
      ...state.rowModes,
      [id]: { mode: GridRowModes.Edit },
    }
  })),
  
  remove: (id) => set((state) => ({
    employees: state.employees.filter(emp => emp.id !== id),
    rowModes: {
      ...state.rowModes,
      [id]: { mode: GridRowModes.View },
    }
  })),

  startEditing: (id) => set((state) => ({
    rowModes: {
      ...state.rowModes,
      [id]: { mode: GridRowModes.Edit },
    }
  })),

  saveChanges: (id) => set((state) => ({
    rowModes: {
      ...state.rowModes,
      [id]: { mode: GridRowModes.View },
    }
  })),

  cancelEditing: (id) => set((state) => ({
    rowModes: {
      ...state.rowModes,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    }
  })),

  updateRow: (newRow) => {
    const updatedRow = { ...(newRow as EmployeeDetails), isNew: false };
    set((state) => ({
      employees: state.employees.map((row) =>
        row.id === newRow.id ? updatedRow : row
      ),
    }));
    return updatedRow;
  },
}));
