import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'

import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Sidebar = () => {
  return (
      <div className="sidebarContainer">
          <div className="sidebarWrapper">
              <div className="sidebarOptions">
                  <ul className="sidebarList">
                    <Link to="/dashboard" className="link">
                      <li className="sidebarListItems" >
                        <DashboardCustomizeOutlinedIcon className="menuIcon"/>
                        Dashboard 
                      </li>
                    </Link>
                    <Link to="/units" className="link">    
                      <li className="sidebarListItems">
                        <HomeOutlinedIcon className="menuIcon"/>
                        Units</li>
                    </Link>
                    <Link to="/reports" className="link"> 
                      <li className="sidebarListItems">
                        <SummarizeOutlinedIcon className="menuIcon" />
                        Reports
                      </li>
                    </Link>  
                    <Link to="/invoices" className="link">
                      <li className="sidebarListItems">
                        <FileCopyOutlinedIcon className="menuIcon"/>
                        Invoicing</li>
                    </Link>
                    <Link to="/users" className="link">    
                      <li className="sidebarListItems">
                        <PersonAddAltOutlinedIcon className="menuIcon"/>
                        Users</li>
                    </Link>    
                  </ul>
              </div>
          </div>
      </div> 
  )
}

export default Sidebar