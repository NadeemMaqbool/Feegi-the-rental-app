import React from 'react'
import './unit.css'
import Checkbox from '../../components/checkbox/checkbox'

const addUnit = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Add new Unit</h2>
        <div className="content">
          <div className="formBody">
            <form action="">
              <div className="section">
                <div className="sectionHeader">
                  <p className="header">Please describe Unit Address here</p>
                </div>
                <div className="rowGroup">
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">Building Name</label>
                    <input type="text" className="textFieldInput"/>
                  </div>
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">Address</label>
                    <input type="text" className="textFieldInput"/>
                  </div>
                </div>

                <div className="rowGroup">
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">City</label>
                    <input type="text" className="textFieldInput"/>
                  </div>
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">Country</label>
                    <input type="text" className="textFieldInput"/>
                  </div>
                </div>

                <div className="rowGroup">
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">Zipcode</label>
                    <input type="text" className="textFieldInput"/>
                  </div>
                </div>
              </div>  
   
              <div className="section">
                <div className="sectionHeader">
                  <p className="header">Describe Building Details Here</p>
                </div>
                <div className="rowGroup">
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">Building Name</label>
                    <input type="text" className="textFieldInput"/>
                  </div>
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">Total Rooms</label>
                    <input type="number" className="textFieldInput"/>
                  </div>
                </div>

                <div className="rowGroup">
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">No. of Bedrooms</label>
                    <input type="text" className="textFieldInput"/>
                  </div>
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">Floor Number</label>
                    <input type="text" className="textFieldInput"/>
                  </div>
                </div>

                <div className="rowGroup">
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">Total Floor</label>
                    <input type="text" className="textFieldInput"/>
                  </div>
                  <div className="rowItem">
                    <label htmlFor="" className="textFieldLabel">Unit Condition</label>
                    <select className="selectOptionField">
                      <option value="0">Select House Condition</option>
                      <option value="1">Liveable</option>
                      <option value="2">Fine</option>
                      <option value="3">Good</option>
                      <option value="3">Excellent</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="sectionHeader">
                  <p className="header">List Ameneties</p>
                </div>
                <div className="row-checkbox" >
                  <Checkbox name="Kitchen" />
                  <Checkbox name="Toilet" />
                  <Checkbox name="Shower" />
                  <Checkbox name="TV" />
                  <Checkbox name="Internet" />
                  <Checkbox name="Fridge" />
                  <Checkbox name="Microwave" />
                  <Checkbox name="Owen" />
                  <Checkbox name="Dish Washer" />
                  
                </div>
              </div>

            </form>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default addUnit