import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlaying();

  return (
    <div>
      <Header isLogged={true} />
      <main className="absolute">
        <MainContainer />
        <SecondaryContainer />
      </main>
    </div>
  );
};

export default Browse;
