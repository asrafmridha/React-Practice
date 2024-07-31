import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstarp = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        let target = event.target;
        const email = target.email.value;
        const password = target.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        }).catch(error=>{
            console.error('error',error);
        })

    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Login !!!</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
        </div>

    );
};

export default LoginBootstarp;