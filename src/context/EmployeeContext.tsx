import { createContext, useContext, useReducer } from 'react';
import { EmployeeDetails, EmployeeStateContext } from '@/types';
import { initialFormState, employeeFormReducer } from '@/reducer';

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
