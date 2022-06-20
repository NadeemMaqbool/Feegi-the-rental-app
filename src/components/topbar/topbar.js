import React from 'react'
import "../../components/topbar/topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarWrapper">
        <div className="topbarLogo">
          SpaceRent
        </div>
        <div className="topbarCenter">
          <div className="topbarUserInfo">Hello Muhammad Nadeem</div> 
          <div className="topbarDateInfo">Today, 23 Nov 2022</div> 
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