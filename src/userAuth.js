import React, {useState} from 'react'
import { auth } from './firebase';

const UserAuth = () => {
    const[data,setData] = useState({
        email:'',
        password:''
    })
    const{email,password} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const signUp = e =>{
     e.preventDefault();
     auth.createUserWithEmailAndPassword(email,password).then(
        user => console.log(user)).catch(err=>console.log(err))
    }
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(
            user => console.log(user)).catch(err=>console.log(err))
       }
  return (
    <div>
      <center>
        <h4>AUTHENTICATION</h4>
        <form autoComplete='off'>
            <input type="email" name="email" placeholder='Email' value={email} onChange={changeHandler}/><br/>
            <input type="text" name="password" placeholder='Password' value={password} onChange={changeHandler}/><br/>
            <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
            <button onClick={signUp}>Sign Up</button>
        </form>
      </center>
    </div>
  )
}

export default UserAuth
