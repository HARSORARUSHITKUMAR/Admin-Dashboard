import React from 'react'
import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email', headerName: 'Email', width: 230 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow',email:'harsora12@gmail.com', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', email:'harsora12@gmail.com',firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', email:'harsora12@gmail.com',firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', email:'harsora12@gmail.com',firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', email:'harsora12@gmail.com',firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', email:'harsora12@gmail.com',firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', email:'harsora12@gmail.com',firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', email:'harsora12@gmail.com',firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', email:'harsora12@gmail.com',firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow',email:'harsora12@gmail.com', firstName: 'Jon', age: 35 },
  { id: 11, lastName: 'Lannister', email:'harsora12@gmail.com',firstName: 'Cersei', age: 42 },
  { id: 12, lastName: 'Lannister', email:'harsora12@gmail.com',firstName: 'Jaime', age: 45 },
  { id: 13, lastName: 'Stark', email:'harsora12@gmail.com',firstName: 'Arya', age: 16 },
  { id: 14, lastName: 'Targaryen', email:'harsora12@gmail.com',firstName: 'Daenerys', age: null },
  { id: 15, lastName: 'Melisandre', email:'harsora12@gmail.com',firstName: null, age: 150 },
  { id: 16, lastName: 'Clifford', email:'harsora12@gmail.com',firstName: 'Ferrara', age: 44 },
  { id: 17, lastName: 'Frances', email:'harsora12@gmail.com',firstName: 'Rossini', age: 36 },
  { id: 18, lastName: 'Roxie', email:'harsora12@gmail.com',firstName: 'Harvey', age: 65 },
  { id: 19, lastName: 'Roxie', email:'harsora12@gmail.com',firstName: 'Harvey', age: 65 },
  { id: 20, lastName: 'Frances', email:'harsora12@gmail.com',firstName: 'Rossini', age: 36 },
];


const Datatable = () => {
  return (
    <div className='datatable'>
       <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
       <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        />
        </div>
      </div>
    </div>
  )
}

export default Datatable
