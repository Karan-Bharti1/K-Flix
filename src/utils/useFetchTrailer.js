import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./url";
import { addTrailerVideo } from "./movieSlice";

addTrailerVideo
const useFetchTrailer=(id)=>{
   const dispatch=useDispatch()
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json?.results?.find(
      (m) => m?.type === "Trailer" || m?.type === "Teaser"
    );
    dispatch(addTrailerVideo(trailer.key))
    
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
}
export default useFetchTrailer