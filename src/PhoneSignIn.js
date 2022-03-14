import React from 'react'
import { auth } from "./firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import './App';
const PhoneSignIn = () => {
    const countryCode = "+977";
    const [phoneNumber, setPhoneNumber] = useState(countryCode);
    const [expandForm, setExpandForm] = useState(false);
  const [OTP ,setOTP]= useState('');
    const generateRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
  
        }
      }, auth);
    }
  
    const requestOTP = (e) => {
      console.log(requestOTP)
      e.preventDefault();
      if (phoneNumber.length >= 14) {
        setExpandForm(true);
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then(confirmationResult  => {
           window.confirmationResult = confirmationResult;
          }).catch((err) => {
            console.log(err)
          })
      }
  
    }
  const verifyOTP=(e)=>{
    const otp = e.target.value;
    setOTP(otp);
    if(otp.length === 6){
      console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => { 
        // User signed in successfully.
        const user = result.user;
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
    }
  }
  return (
    <div className="phone-sign-in">
   <div className='phone'>
   <form onSubmit={requestOTP}>
      <h1>Phone Number</h1>
      <input type="tel"  
      value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>

      {
        expandForm === true ?
          <>
            <label>OTP</label>
            <input type="number" value={OTP} onChange={verifyOTP}/>
            <div>Please enter otp code</div>
          </>
          :
          null
      }
      {
        expandForm === false ?
          <button type="submit" className="btn">request otp</button>
          :
          null
      }
      <div id="recaptcha-container"></div>
    </form>

     </div>
  </div>
  )
}

export default PhoneSignIn