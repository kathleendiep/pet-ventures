import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Post from '../../Post';
import NavBar from '../navBar/navBar';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    let navigate = useNavigate()
    useEffect(() => {
        if(token['mytoken']) {
            navigate('/home')
        }
    }, [token])

    const loginBtn = () => {
        Post.LoginUser({username, password})
        // sets token to the resp.token - cookies 
        .then(resp => setToken('mytoken',resp.token)) 
        const userData = {
                username,
                password,
        }
        .then(
            localStorage.setItem('mytoken', JSON.stringify(userData))
        )
        .catch(error => console.log(error))
    }

    const RegisterBtn = () => {
        Post.RegisterUser({username, password})
        .then(() =>  loginBtn())
        .catch(error =>console.log(error))
    }
    const logout = () => {
        localStorage.removeItem('mytoken');
        setLogin(false)
    };
    return (
        <>
        <NavBar 
        isLogin={isLogin}
        setLogin={setLogin}
        logout={logout}
        />
        <div className = "App">
            <br/>
            <br/>
            {isLogin ? <h1>Please Login </h1> : <h1>Please Register </h1>}
            

            <br/>
            <br/>

            <div className = "mb-3">
            <label htmlFor = "username" className = "form-label">Username</label>
            <input type = "text" className = "form-control" id="username" placeholder = "Please Enter Username"
            value = {username} onChange = {e => setUsername(e.target.value)}
            />

            </div>

            <div className = "mb-3">
            <label htmlFor = "password" className = "form-label">Password</label>
            <input type = "password" className = "form-control" id="password" placeholder = "Please Enter Password"
            value = {password} onChange = {e => setPassword(e.target.value)}
            
            />

            </div>

            {isLogin ?  <button onClick = {loginBtn}  className = "btn btn-primary">Login</button>
            :  <button onClick = {RegisterBtn} className = "btn btn-primary">Register</button>
        }

           
            <div className = "mb-3">
            <br/>
            {isLogin ? <h5>If You Don't Have Account, Please <button className = "btn btn-primary" onClick = {() => setLogin(false)} >Register</button>Here</h5>
            
             :  <h5>If You Have Account, Please <button className = "btn btn-primary" onClick = {() => setLogin(true)} >Login</button>Here</h5>
            }

            </div>

        </div>
        
        </>
    );
}

export default Login