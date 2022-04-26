import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Post from '../../Post';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginBtn = () => {
        Post.LoginUser({username, password})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    return (
        <>
            <h1>Please login</h1>
            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label for="formBasicText" >Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" value={username} onChange = {e => setUsername(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label for="formBasicPassword">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange = {e => setPassword(e.target.value)} />
                </Form.Group>
                <Button onClick={loginBtn} variant="primary">
                    Submit
                </Button>
            </Form> */}
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Please Enter Username"
                    value={username} onChange={e => setUsername(e.target.value)}
                />

            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Please Enter Password"
                    value={password} onChange={e => setPassword(e.target.value)}

                />

            </div>
            <button onClick = {loginBtn} className = "btn btn-primary">Login</button>
        </>
    );
}

export default Login