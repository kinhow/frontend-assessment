import { createContext, useContext, useReducer } from 'react';
import { initialFormState, employeeFormReducer } from '@/reducer';
import type { EmployeeDetails, EmployeeStateContext } from '@/types';

const EmployeeStateContext = createContext<EmployeeStateContext>({
  state: {} as EmployeeDetails,
  dispatch: () => {}
});

export const useEmployeeStateContext = () => useContext(EmployeeStateContext);

export const EmployeeStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(employeeFormReducer, initialFormState);

  return (
    <EmployeeStateContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </EmployeeStateContext.Provider>
  );
};
