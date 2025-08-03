import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'

const Body = () => {
  const dispatch=useDispatch()
    const router=createBrowserRouter([{
  path:"/",
  element:<Login/>,
},{
    path:"/browse",
    element:<Browse/>
}])

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const{ uid,displayName,email} = user;
    dispatch(addUser({uid:uid,displayName:displayName,email:email}))
    
  } else {
    dispatch(removeUser())
  }
},[]);
})
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default Body