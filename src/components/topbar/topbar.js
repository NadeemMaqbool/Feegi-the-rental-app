import React from 'react'
import "../../components/topbar/topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarWrapper">
        <div className="topbarLogo">
          meRenter
        </div>
        <div className="topbarCenter">
          Hello Nadeem 
        </div>
        <div className="topbarSettings">
          <div className="topbarIcon">
            <LanguageOutlinedIcon />
          </div>
          <div className="topbarIcon">
            <NotificationsNoneIcon />
          </div>
          <image className="topbarProfile" src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=''/>
          
        </div>
      </div>
    </div>
  )
}

export default Topbar