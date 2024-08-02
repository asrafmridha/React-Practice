import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth();

const handleForgetPassword = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert(`Password Reset Link Send To This ${email}`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    console.log(email);
}

const ResetPasswordPage = () => {
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Forget Password !!!</h3>
            <Form onSubmit={handleForgetPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Give Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send Code
                </Button>
            </Form>
        </div>
    );
};

export default ResetPasswordPage;