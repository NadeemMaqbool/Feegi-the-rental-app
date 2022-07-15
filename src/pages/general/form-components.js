import React from 'react'
import './form-components.css'

const form = () => {
  return (
    <div className="newUserContainer">
        <div className="formContainer">
            <div className="form-heading">
                <h1>Create New User</h1>
            </div>
            <form action="" className="form-tyle">
                <div className="row-group" >
                    <label htmlFor="" className="row-group-label">First Name</label>
                    <input type="text" placeholder='first name' className="row-group-input"/>
                </div>
                <div className="row-group" >
                    <label htmlFor="" className="row-group-label">Last Name</label>
                    <input type="text" placeholder='first name' className="row-group-input"/>
                </div>
                <div className="row-group" >
                    <label htmlFor="" className="row-group-label">Email</label>
                    <input type="text" placeholder='first name' className="row-group-input"/>
                </div>
                
                <div className="row-group" >
                    <label htmlFor="" className="row-group-label">Select Role</label>
                    <select name="select-names" className="row-group-select"> 
                        <option value="1">Nadeem</option>
                        <option value="1">Ali</option>
                        <option value="1">Waqas</option>
                        <option value="1">Jibran</option>
                    </select>
                </div>
                
                <div className="row-group" >
                    <label htmlFor="" className="row-group-label">Address</label>
                    <textarea name="address" id="" cols="50" rows="5" className="row-group-text"></textarea>
                </div>

                <div className="row-group" >
                    <div className="row-group-radio">
                        
                        <input type="radio" className="row-group-radio-input" name="gender"/>
                        <label htmlFor="" className="row-group-label-radio">Male</label>
                        
                        <input type="radio" className="row-group-radio-input" name="gender"/>
                        <label htmlFor="" className="row-group-label-radio">Female</label>
                    </div>
                </div>

                <div className="row-group" >
                    <div className="row-group-checkBox">
                        <input type="checkbox" className="row-group-checkbox-input" name="gender"/>
                        <label htmlFor="" className="row-group-label-checkbox">Admin</label>
                        <input type="checkbox" className="row-group-checkbox-input" name="gender"/>
                        <label htmlFor="" className="row-group-label-checkbox">Super Admin</label>
                    </div>
                </div>
            </form>
        </div> 
    </div>
  )
}

export default form