import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
const VideoTitle = ({mainMovie}) => {
  const {original_title,
overview
}=mainMovie
  return (
    <div className='absolute w-screen aspect-video bg-gradient-to-r from-black'>
      <div className='pt-[16%] px-24  text-white '>
<h1 className='text-5xl font-bold'>{original_title}</h1>
<p className='text-lg py-6 w-1/4'>{overview}</p>
</div>
<div className='flex px-24'>
  <button className='text-lg p-3 rounded-lg px-4 bg-gray-200 font-bold mx-3 hover:opacity-80 cursor-pointer'><FaPlay/></button>
   <button className='text-lg p-3  px-4 rounded-lg bg-gray-200 font-bold mx-3  hover:opacity-80 cursor-pointer'><FaInfo/> </button>
</div>
    </div>
  )
}

export default VideoTitle