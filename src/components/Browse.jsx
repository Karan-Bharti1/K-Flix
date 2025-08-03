import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

const Browse = () => {
  const user=useSelector(state=>state.user)
  console.log(user)
  return (
    <div>
      <Header isLogged={true}/>
      
    </div>
  )
}

export default Browse