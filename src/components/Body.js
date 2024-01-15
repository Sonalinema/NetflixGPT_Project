import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import {useEffect} from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch} from "react-redux"
import { addUser, removeUser } from "../utils/userSlice";
const auth = getAuth();

const Body = () => {
const dispatch=useDispatch()

  // create browser router for an application
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user.uid;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        
        // ...
      } else {
        dispatch(removeUser())
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
