import React from 'react'
import './sidebar.css'

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
                    <li className="sidebarListItems" >
                      <DashboardCustomizeOutlinedIcon className="menuIcon"/>
                      Dashboard 
                    </li>
                    <li className="sidebarListItems">
                      <SummarizeOutlinedIcon className="menuIcon" />
                      Reports
                    </li>
                    <li className="sidebarListItems">
                      <FileCopyOutlinedIcon className="menuIcon"/>
                      Invoicing</li>
                    <li className="sidebarListItems">
                      <HomeOutlinedIcon className="menuIcon"/>
                      Units</li>
                    <li className="sidebarListItems">
                      <PersonAddAltOutlinedIcon className="menuIcon"/>
                      Users</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar