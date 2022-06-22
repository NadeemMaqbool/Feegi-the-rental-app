import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarWrapper">
        <div className="topbarLogo">
          <span className="logo"> 
           <Link exact to="/">
           <img src={require('../../images/logo.png')} alt="Inside Rent" />

           </Link>
          </span>
        </div>
        <div className="topbarCenter">
          <div className="topbarUserInfo">Hi Nadeem,</div> 
          <div className="topbarDateInfo">Today, 23 Nov 2022</div> 
          <div className="topbarSettings">
            <div className="topbarIcon">
              <LanguageOutlinedIcon />
            </div>
            <div className="topbarIcon">
              <NotificationsNoneIcon />
            </div>
            <img className="topbarProfile" src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=''/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar