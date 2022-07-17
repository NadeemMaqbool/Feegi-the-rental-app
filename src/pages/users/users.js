import React from 'react'
import './user.css'
import { DataGrid } from '@mui/x-data-grid';
import {columns, rows} from '../../utils/users-list'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
 
const User = () => {
  return (
    <div className="container">
        <div className="userContainer">
          <div className="header">
            <Link to="/users/new" className="btn-general link">
              Add User
              <AddCircleOutlineIcon className="addCircleIcon"/>
            </Link>
            <button className="btn-danger"> 
              Delete
              <DeleteOutlineIcon />
            </button>
          </div>
          <div className="userWrapper" style={{ height: '92%', width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={12}
              checkboxSelection
              rowsPerPageOptions={[10]}
              pagination
            />
          </div>
        </div>
    </div>
  )
}

export default User