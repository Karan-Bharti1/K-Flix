import { useDispatch } from "react-redux"
import { addPopular } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/url"

 const usePopular=()=>{
    const dispatch=useDispatch()
 const playMovies=async()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
const json=await data.json()
console.log(json)
 dispatch(addPopular(json.results))
 }
 useEffect(()=>{
 playMovies()
 
 },[])
 }
 export default usePopular