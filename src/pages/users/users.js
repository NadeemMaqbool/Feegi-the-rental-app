import React from 'react'
import './user.css'
import { DataGrid } from '@mui/x-data-grid';
import {columns, rows} from '../../utils/users-list'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
 
const User = () => {
  return (
    <div className="userContainer">
        <div className="header">
          <button className="addUserBtn"> 
            Add New User
            <AddCircleOutlineIcon className="addCircleIcon"/>
          </button>
          <button className="deleteMultiBtn"> 
            Delete
            <DeleteOutlineIcon />
          </button>
        </div>
        <div className="userWrapper" style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        </div>
    </div>
  )
}

export default User