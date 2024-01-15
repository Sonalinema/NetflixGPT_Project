// rafc shot form for basic boiler plate
// rafce
import React, { useState,useRef } from 'react'
import { checkValidateData } from '../utils/validate'
import Header from './Header'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import {useNavigate} from  "react-router-dom"
import { useDispatch} from "react-redux"
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm,setIsSignInForm]= useState(true)
  const email =useRef(null) 
  const password =useRef(null)
  const name = useRef(null)
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const [errorMessage,setErrorMessage] =useState(null)
  const handleButtonClick=(e)=>{
    e.preventDefault()
    const message=checkValidateData(email.current.value,password.current.value)
    setErrorMessage(message)
    if(message) return;   // dont want to go ahead
    //now write user sign up function
    if(!isSignInForm){
//sign up logic
createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    updateProfile(user, {
      displayName: name.current.value
    }).then(() => {
      const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        
      // Profile updated!
      // ...

     
    }).catch((error) => {
      // An error occurred
      // ...
    });
    console.log(user)
    navigate('/browse')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+"-" + errorMessage)
  });

    }
    else{
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        console.log(user)
        navigate('/browse')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage)
      });
    
    }
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg'
         alt="logo"/>
         </div>
         {/* w-3/12 -- full screen ka 3 by 12 part*/}
         {/* mx-auto right-0 left-0 to put anthing at the center */}
         <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-86'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
          <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
          <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
          <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up" }</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already regisered ? Sign In Now"}</p>
         </form>
    </div>
  )
}

export default Login
