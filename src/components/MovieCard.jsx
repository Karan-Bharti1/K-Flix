import React from 'react';
import { POSTER_URL } from '../utils/url';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[180px] px-4">
      <img alt="Movie Card" src={POSTER_URL + posterPath} className="rounded-md" />
    </div>
  );
};

export default MovieCard;
