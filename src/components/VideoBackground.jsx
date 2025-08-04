import React from "react";
import { API_OPTIONS, YOUTUBE_URL } from "../utils/url";
import useFetchTrailer from "../utils/useFetchTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({ mainMovie }) => {
  const trailerId = useSelector((state) => state?.movie?.trailerVideo);
  const { id } = mainMovie;
  useFetchTrailer(id);

  return (
    <div className="w-screen aspect-video">
      <iframe
      className="w-screen aspect-video"
        src={YOUTUBE_URL + trailerId+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
