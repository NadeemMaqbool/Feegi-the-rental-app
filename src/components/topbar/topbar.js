import React, { useState, useEffect, useContext } from 'react'

import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { AuthContext } from '../../context/auth-context'

import { Link, useNavigate } from 'react-router-dom'
import { SimpleConsoleLogger } from 'typeorm';

const Topbar = () => {
  const [loggedInUser, setloggedInUser] = useState(false)

  const context = useContext(AuthContext)
  
  let navigate = useNavigate();

  const logoutHandler = () => {
    context.logout()
    navigate("/login", { replace: true });
  }

  useEffect( () =>{
    fetch('http://localhost:5000/api/users/'+context.userId , {
      method: 'GET',
      headers: {
        Authentication: 'Bearer ' + context.token
      }
   }).then(response => {
     return response.json()
   }).then(responseData => {
     console.log(responseData)
    setloggedInUser(responseData.user) 
   })
   .catch(e=> {
     console.log('Unable to fetch user data', e);
   })  
   
  },[])
  return (
    <div className="topbarContainer">
      <div className="topbarWrapper">
        <div className="topbarLogo">
          <span className="logo"> 
           <Link to="/">
           <img src={require('../../images/logo-final.png')} alt="Inside Rent" className="logoImg"/>

           </Link>
          </span>
        </div>
        <div className="topbarCenter">
          <div className="topbarUserInfo">Hi {loggedInUser.first_name},</div> 
          <div className="topbarDateInfo">Today, 23 Nov 2022</div> 
          <div className="topbarSettings">
            <div className="topbarIcon">
              <LanguageOutlinedIcon />
            </div>
            <div className="topbarIcon">
              <NotificationsNoneIcon />
            </div>
            <div className="profile">
              <img 
                className="topbarProfile" 
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200" 
                alt=''
              />
              <div className="profile-dropdown">
                <p className="welcome">
                  welcome {loggedInUser.first_name}!
                </p>
                <div className="menuItem">
                  <PermIdentityIcon className="topBarIcon"/>
                  <a>Profile</a>
                </div>
                <div className="menuItem">
                  <SettingsOutlinedIcon className="topBarIcon" />
                  <a>Settings</a>
                </div>
                <div className="menuItem">
                  <LogoutOutlinedIcon className="topBarIcon"/>
                  <a onClick={() =>logoutHandler()}>Logout</a>
                </div>
                
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar