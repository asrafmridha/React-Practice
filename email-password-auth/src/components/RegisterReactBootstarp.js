import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const RegisterReactBootstarp = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    const handleRegister = (event) => {
        event.preventDefault();
        let target = event.target;
        const email = target.email.value;
        const password = target.password.value;

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please Provide At Least Two Upper Case ');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password Should Be At Least 6 Character ');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please Add At Least One Special Character ');
            return;
        }
        setPasswordError('');
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
            }).catch(error => {
                console.error('error', error);
                setPasswordError(error.message);
            })



    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register !!!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User Created Successfully</p>}

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default RegisterReactBootstarp;