import { TextField } from "@/components";
import { useEmployeeStore } from "@/store";
import { EmployeeDetails } from "@/types";
import { useEmployeeStateContext } from "@/context";

const AddEmployeeForm = ({ onClose }: { onClose: () => void }) => {
  const { state, dispatch } = useEmployeeStateContext();
  const { id, email, firstName, lastName, avatar } = state;

  const { employees, add, update } = useEmployeeStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !firstName || !lastName) return;
    
    if (id) {
      update(id, state)
    } else {
      add({
        id: employees?.length + 1,
        email: email,
        firstName: firstName,
        lastName: lastName,
        avatar: avatar,
      });
    }
    onClose();
    dispatch({ type: 'RESET_FORM' });
  };

  const handleChange = (field: keyof EmployeeDetails) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({ type: 'SET_FIELD', field, value: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-lg">Add Employee</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <TextField
            type="text"
            label="First Name"
            value={firstName}
            onChange={handleChange('firstName')}
          />

          <TextField
            type="text"
            label="Last Name"
            value={lastName}
            onChange={handleChange('lastName')}
          />

          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={handleChange('email')}
          />
        </div>

        <div className="flex gap-4 justify-end">
          <button type="submit" className="bg-blue text-white px-4 py-2 rounded w-max">Add</button>
          <button type="button" className="text-black w-max" onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  )
}

export default AddEmployeeForm;
