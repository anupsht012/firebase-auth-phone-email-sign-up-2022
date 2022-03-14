import React, { useState } from 'react'
import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import { auth } from './firebase';
import './App';

const Reset = () => {
    const [email, setEmail] = useState("");

    const forgotPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(function () {
                alert('Please check your email...')
            }).catch(function (e) {
                console.log(e)
            })
    }


    return (
        <div className='reset-password'>
            <div className='reset'>
                <div className='text'>Send Reset Link</div>
                <input type="email" placeholder="Email"
                    onChange={(e) => { setEmail(e.target.value) }}>
                </input>
                <button onClick={() => forgotPassword(email)}>Send sign in email</button>
            </div>
        </div>
    )
}

export default Reset
