import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const Body = () => {
  const dispatch=useDispatch()
    const router=createBrowserRouter([{
  path:"/",
  element:<Login/>,
},{
    path:"/browse",
    element:<Browse/>
}])


  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}

export default Body