import React, { useState, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'
import './login.css'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            password: event.target.password.value,
        }

        fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            return response.json();
        }).then(responseData => {
            if (!responseData.token) {
                setError(responseData.message)        
                return
            }
            setIsLogin(true);
            context.login(responseData.user.uuid, responseData.token)
            navigate("/dashboard", { replace: true });
        }).catch(err => {
            console.error('Post form error: ', err)
            setError(err);
        })
        
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
                    Welcome Back, 
                    </p>
                    <p className="signup-punchline-text">
                    We are working everyday to make your experience better. 
                    </p>
                </div>
                <div className="singup-banner-img">
                    <img src={require('../../images/login-bn.png')} alt="banner"/>
                </div>
            </div>
            <div className="signup-form" >
                <form onSubmit= { e => handleSubmit(e)}>
                    <div className="signup-form-container">
                        <div className="form-header-wrapper">
                            <p className="form-header-small-text">
                                Login to excess your dashboard
                            </p>
                            <h1 className="form-header">
                                Login to Feegi Rental
                            </h1>
                        </div>
                        <div>
                            {error && 
                                <div className="show-errors">
                                    <p>{error}</p>
                                </div>
                            }
                        </div>
                        {isLogin && (<Navigate to="/dashboard" />)}
                        <div className="form_group">
                            <label className="form-label"> Email</label>
                            <input name ='email' type="email" className="form-group-input" placeholder="Enter email"/>
                        </div>
                        <div className="form_group">
                            <label className="form-label"> Password </label>
                            <input name='password' type="password" className="form-group-input" placeholder="Your password"/>
                        </div>
                        <div className="form_group">
                            <button className="signup-button">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
