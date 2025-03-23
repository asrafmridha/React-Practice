import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';
import { FaRegEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';

const auth = getAuth(app);

const LoginBootstarp = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        let target = event.target;
        const email = target.email.value;
        const password = target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(error => {
                console.error('error', error);
            })

    }

    const [showPassword, setshowPassword] = useState(false);
    const [checkbox, setcheckbox] = useState(false);
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
                    <Form.Control type={showPassword ? 'text' : 'password'} name='password' placeholder="Password" required /> <button onClick={() => setshowPassword(!showPassword)} className='btn btn' type='button'>{showPassword ? <IoMdEyeOff /> : <FaRegEye />}   </button>

                </Form.Group>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name='checkbox' value="" id="flexCheckDefault" onClick={()=>setcheckbox(!checkbox)} />
                    <label class="form-check-label" for="flexCheckDefault">
                        Accept Terms And Condition
                    </label>
                </div>
                <Button variant="primary" type="submit" disabled={!checkbox} >
                    Login
                </Button>
            </Form>
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            <p><small>Forget Password? <Link to='/resetPasswordPage'>Reset Password</Link></small></p>
        </div>

    );
};

export default LoginBootstarp;