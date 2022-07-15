import React from 'react'
import './animationLoader.css'

const animationLoader = props => {
  return (
    <div className="main">
      <div className="animation-text-loader">
        <p>Please wait page loading ...</p>
      </div>
      <div className='loader'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default animationLoader