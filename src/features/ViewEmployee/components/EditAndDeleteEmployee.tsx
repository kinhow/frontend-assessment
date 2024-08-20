import { useEmployeeStore } from '@/store';
import { GridRowId, GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import {
  Save as SaveIcon,
  Cancel as CancelIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

const EditAndDeleteEmployee = ({ id }: { id: GridRowId }) => {
  const { rowModes, remove, startEditing, saveChanges, cancelEditing } = useEmployeeStore();
  const isEditMode = rowModes[id]?.mode === GridRowModes.Edit;

  if (isEditMode) {
    return [
      <GridActionsCellItem
        key="Save"
        icon={<SaveIcon />}
        label="Save"
        sx={{
          color: 'primary.main',
        }}
        onClick={() => saveChanges(id)}
      />,
      <GridActionsCellItem
        key="Cancel"
        icon={<CancelIcon />}
        label="Cancel"
        color="inherit"
        className="textPrimary"
        onClick={() => cancelEditing(id)}
      />, 
    ];
  }

  return [
    <GridActionsCellItem
      icon={<EditIcon />}
      label="Edit"
      className="textPrimary"
      onClick={() => startEditing(id)}
      color="inherit"
      key="Edit"
    />,
    <GridActionsCellItem
      icon={<DeleteIcon />}
      label="Delete"
      onClick={() => remove(id)}
      color="inherit"
      key="Delete"
    />,
  ];
}

export default EditAndDeleteEmployee;
