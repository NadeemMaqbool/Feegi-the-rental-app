import React from 'react'
import './user.css'
import { DataGrid } from '@mui/x-data-grid';

const User = () => {
  return (
    <div className="userContainer">
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