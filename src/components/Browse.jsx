import React, { useEffect } from 'react'
import Header from './Header'

import { API_OPTIONS } from '../utils/url'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const Browse = () => {
  const dispatch=useDispatch()
 const nowPlayingMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
const json=await data.json()
console.log(json)
 dispatch(addNowPlayingMovies(json.results))
 }
 useEffect(()=>{
  nowPlayingMovies()
 
 },[])
 
  return (
    <div>
      <Header isLogged={true}/>
      <main className='absolute'>

      </main>
    </div>
  )
}

export default Browse