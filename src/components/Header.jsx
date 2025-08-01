import React from 'react'
import { LOGO_URL } from '../utils/url'

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black  z-10 w-full'>
        <img className='w-48 mx-16 object-fit' src={LOGO_URL}/>
    </div>
  )
}

export default Header