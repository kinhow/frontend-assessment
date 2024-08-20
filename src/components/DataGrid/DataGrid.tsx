import { DataGrid as MuiDataGrid, DataGridProps } from '@mui/x-data-grid';

const DataGrid = ({...props}: DataGridProps) => {
  return <MuiDataGrid {...props} />
}

export default DataGrid;
