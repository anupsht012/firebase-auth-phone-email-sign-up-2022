import React from 'react'
import {
    GoogleAuthProvider,
    signInWithPopup
  } from "firebase/auth";
import './App';


  import { getAuth } from 'firebase/auth';
import { auth } from './firebase';
const Signin = () => {
  // const [user, loading, error] = useAuthState(auth);

    const signInWithGoogle =()=>{
        const provider =new GoogleAuthProvider();
        signInWithPopup(auth, provider)
       
        .then((re)=>{
            console.log(re)
        })
        .catch((err)=>{
            console.log(err)
        })
    }



   



  return (
      <>
       <div className='google-sign-in'>
       <div className='google'>
       <h4>Sign In with Google</h4>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
       </div>
    </div>

   
      </>
   
  )
}

export default Signin