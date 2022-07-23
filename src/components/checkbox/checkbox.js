import React from 'react'
import './checkbox.css'

const checkbox = ({name}) => {
  return (
    <>
        <div className="row-checkbox-item">
            <input
                type="checkbox" 
                className="row-group-checkbox-input"
                name="{name}"
            />
            <label 
                htmlFor="" 
                className="row-group-label-checkbox"
            >
                { name }
            </label>
        </div>
    </>
)}

export default checkbox