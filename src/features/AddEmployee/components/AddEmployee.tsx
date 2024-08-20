"use client"
import { Dialog } from "@/components/";
import { AddEmployeeForm } from './AddEmployeeForm';
import { useToggleDialog } from "@/hooks";

const AddEmployee = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useToggleDialog();

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-3xl flex-1">Employee Management</h1>
        <button onClick={handleModalOpen} className="bg-blue text-white rounded-full py-2 px-6">Add</button>
      </div>
      <Dialog open={isModalOpen} onClose={handleModalClose}>
        <AddEmployeeForm onClose={handleModalClose} />
      </Dialog>
    </>
  )
}

export default AddEmployee;
