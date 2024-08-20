import { Image } from '@/components';
import { EditAndDeleteEmployee } from '../components';
import { GridColDef } from '@mui/x-data-grid';

export const COLUMNS: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, editable: false },
  {
    field: 'avatar',
    headerName: 'Avatar',
    cellClassName: 'avatar-cell',
    renderCell: (params) => {
      const { value } = params;
      return (
        <div className='flex items-center justify-center'>
          <Image
            alt="avatar"
            width={35}
            height={35}
            className='rounded-full'
            src={value === "" ? require("../../../../public/user.png") : value}
          />
        </div>
      )
    },
    editable: false
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true
  },
  {
    field: 'action',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => {
      const { id } = params;
      return <EditAndDeleteEmployee id={id} />
    },
  },
];
