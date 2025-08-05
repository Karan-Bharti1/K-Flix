import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchBar from "./GPTSearchBar";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlaying();
const showGpt=useSelector(state=>state?.gpt?.showGptSearch)
  return (
    <div>
      <Header isLogged={true} />
      <main >
{showGpt ?<GPTSearchBar/>:(<>
<MainContainer />
        <SecondaryContainer />
</>)}
        
      </main>
    </div>
  );
};

export default Browse;
