import { COLUMNS } from "../constants";
import { DataGrid } from "@/components";
import { useEmployeeStore } from "@/store";

const ViewEmployee = () => {
  const { employees, rowModes, updateRow } = useEmployeeStore();

  return (
    <DataGrid
      sx={{
        '& .MuiDataGrid-cell': {
          '&:focus, &:focus-within': {
            outline: 'unset'
          },
          '&.avatar-cell': {
            display: 'flex',
            alignItems: 'center',
          }
        },
      }}
      editMode="row"
      rows={employees}
      columns={COLUMNS}
      rowModesModel={rowModes}
      getRowId={(row) => row.id}
      processRowUpdate={updateRow}
    />
  )
}

export default ViewEmployee;
