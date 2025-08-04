import { useDispatch } from "react-redux"
import {  addTopRated } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/url"

 const useTopRated=()=>{
    const dispatch=useDispatch()
 const playMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
const json=await data.json()
console.log(json)
 dispatch(addTopRated(json?.results))
 }
 useEffect(()=>{
 playMovies()
 
 },[])
 }
 export default useTopRated