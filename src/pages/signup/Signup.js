import React, {useState, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import './signup.css'
import validate from '../../utils/validation/signupValidation';

const Signup = () => {
    
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_pass: '',
        user_type: 'owner'    
    });

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setValues({
            ...values,
            [name] : value
        });
        
    }

    const signupHandler = async (event)=> {
        event.preventDefault();
        setErrors(validate(values))
        setIsSubmitting(true)
    }
    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            formSubmitted();
          }
        },

        [errors]
    );
    const formSubmitted = async () => {
        if (!Object.keys(errors).length > 0) {
            const data = {
                firstName: values.first_name,
                lastName: values.last_name,
                email: values.email,
                password: values.password,
                userType: values.user_type,
            }
                console.log(data, 'Errors:', errors)

            try {
                await fetch('http://localhost:5000/api/auth/signup', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json'            
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    return response.json();
                })
                .then(responseData => {
                    if (!responseData.ok) {
                        console.log(responseData.message);
                        setError(responseData.message);
                    }
                    setIsSignup(true);
                })
                .catch(error => {
                    console.error('Post form error: ', error)
                    setError(error);
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
    
  return (
    <div className='signup-container'>
        <div className='signup-wrapper'>
            <div className="signup-banner">
                <div className="signup-logo">
                    <img src={require('../../images/logo-final.png')} alt="Inside Rent" className="logoImg"/>    
                </div>
                <div className="signup-punchline">
                    <p className="signup-punchline-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu urna nec nisl finibus dictum sed non libero. 
                    </p>
                </div>
                <div className="singup-banner-img">
                    <img src={require('../../images/sign-banner-final.png')} alt="banner"/>
                </div>
            </div>
            <div className="signup-form">
                <div className="signup-form-container">
                    <div className="form-header-wrapper">
                    <p className="form-header-small-text">Sign up to get the best rental experience</p>
                        <h1 className="form-header">
                            Sign Up to Feegi Rental
                        </h1>
                    </div>
                    {error && <div className="show-errors">
                        <p>
                            {error}
                        </p>
                    </div>}
                    {isSignup && (<Navigate to="/login" />)}
                    <form onSubmit = {e => signupHandler(e)}>
                        <div className="form-row">
                            <div className="form_row-item">
                                <label className="form-label"> First Name</label>
                                <input 
                                    name='first_name' 
                                    type="text" 
                                    className="form-input" 
                                    placeholder="First Name"
                                    value={values.first_name}
                                    onChange={e => handleChange(e)}
                                />
                                {errors.first_name && <div className="error">{errors.first_name}</div>}
                            </div>
                            <div className="form_row-item">
                                <label className="form-label"> Last Name</label>
                                <input 
                                    name='last_name'
                                    type="text" 
                                    className="form-input" 
                                    placeholder="Last Name"
                                    value={values.last_name}
                                    onChange={e => handleChange(e)}
                                />
                                { errors.last_name && <div className="error">{errors.last_name}</div> }
                            </div>
                        </div>
                        
                        <div className="form_group">
                            <label className="form-label"> Email</label>
                            <input 
                                name='email' 
                                type="email" 
                                className="form-group-input" 
                                placeholder="Email"
                                value={values.email}
                                onChange={e => handleChange(e)}
                            />
                            {errors.email && <div className="error">{errors.email}</div> }
                        </div>
                        <div className="form_group">
                            <label className="form-label"> Password </label>
                            <input 
                                name='password' 
                                type="password" 
                                className="form-group-input" 
                                placeholder="password"
                                value={values.password}
                                onChange={e => handleChange(e)}
                            />
                            { errors.password && <div className="error">{errors.password}</div> }
                        </div>
                        <div className="form_group">
                            <label className="form-label"> Confirm Password </label>
                            <input 
                                name='confirm_pass' 
                                type="password" 
                                className="form-group-input" 
                                placeholder="confirm password"
                                value={values.confirm_pass}
                                onChange={e => handleChange(e)}
                            />
                            { errors.confirm_pass && <div className="error">{errors.confirm_pass}</div> }
                        </div>

                        <div className="signup-row-group" >
                            <div className="signup-group-radio">
                                <input type="radio" className="signup-group-radio-input" name="user_type" 
                                value="owner" onChange={e=> handleChange(e)} checked/>   
                                <label className="signup-group-label-radio">Owner</label>
                                
                                <input type="radio" className="signup-group-radio-input" 
                                name="user_type" value="renter" onChange={e=> handleChange(e)}/>
                                <label className="signup-group-label-radio">Renter</label>
                                
                                <input type="radio" className="signup-group-radio-input" 
                                name="user_type" value="sub renter" onChange={e=> handleChange(e)}/>
                                <label className="signup-group-label-radio">Sub Renter</label>
                                
                            </div>
                        </div>
                        <div className="form_group">
                            <button className="signup-button">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
