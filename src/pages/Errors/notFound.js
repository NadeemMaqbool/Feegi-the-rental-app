import React from 'react'
import './notFound.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="container-notfound">
        <div className='wrapper-notfound'>
            <h1>404</h1>
            <p className="not-found">Sorry, Page Not Found</p>
            <p className="notice-notfound">Page you are looking for is either unauthorized or not available</p>
            <button className="home-btn-notfound"
                onClick={() => {
                    navigate("../login", { replace: true });
                }}
            >Back to login page</button>
        </div>
    </div>
  )
}

export default NotFound


