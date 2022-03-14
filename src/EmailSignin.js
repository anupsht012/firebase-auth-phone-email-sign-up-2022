import {auth} from './firebase';
import './App.css';
import {useState} from 'react';
import {createUserWithEmailAndPassword, signOut , sendPasswordResetEmail} from "firebase/auth";
import { async } from '@firebase/util';

const EmailSignin=()=> {
const [email , setEmail] = useState('');
const [password , setpassword] = useState('');

const signup = async()=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user= res.user;
        await user.sendEmailVerification();
        signOut(auth);
        alert("email sent")
    }
	catch(err){
console.log(err);
    }
}
	

return (
	<div className="email-sign-in">
	
	<div className='email'>
        <h1>Sign Up with Email</h1>
    <input type="email" placeholder="Email"
	onChange={(e)=>{setEmail(e.target.value)}}>
	</input>
	<br/><br/>
	<input type="password" placeholder="password"
	onChange={(e)=>{setpassword(e.target.value)}}>
	</input>
	<br/><br/>
	<button onClick={signup}>Sign Up</button>
    <div>
      
    </div>
    </div>
	</div>

);
}

export default EmailSignin;
