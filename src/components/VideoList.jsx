import React from "react";
import MovieCard from "./MovieCard";

const VideoList = ({ title, movies }) => {
  return (
    <div className="py-6 ">
        <div >
      <h1 className="text-3xl  font-semibold text-white ml-24 my-3">{title}</h1>

<div className= "flex overflow-x-auto no-scrollbar">
    <div className="flex w-screen">
       
   {movies?.map((movie) => (
      <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
    ))}
  
    </div>
    </div>
</div>
   
    </div>
  );
};

export default VideoList;
