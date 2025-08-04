import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";

const SecondaryContainer = () => {
  usePopular();
  useTopRated();
  useUpcoming();
  const movies = useSelector((state) => state?.movie?.nowPlayingMovies);
  const popularMovies = useSelector((state) => state?.movie?.popular);
  const topRated = useSelector((state) => state?.movie?.topRated);
  const upcoming= useSelector((state) => state?.movie?.upcoming);
  return (
    <div className="bg-black ">
      <div className="-mt-52 z-20 relative">
        {movies && <VideoList title={"Now Playing"} movies={movies} />}
      </div>
      {movies && <VideoList title={"Top Rated"} movies={topRated} />}
      {movies && <VideoList title={"Adventure"} movies={upcoming} />}
      {movies && <VideoList title={"Upcoming"} movies={popularMovies} />}
    </div>
  );
};

export default SecondaryContainer;
