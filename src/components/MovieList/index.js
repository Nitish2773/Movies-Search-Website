import React from "react";

const MovieList = ({ movieItem }) => {
  return (
    <div className="item-container">
      <div className="item-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
          alt=""
          className="item-image"
        />
        <div className="matter">
          <h1 className="item-heading">{movieItem.title}</h1>
          <p className="item-release-date">release date: {movieItem.release_date}</p>
          <p className="item-rating">Rating: {movieItem.vote_average}</p>
          <p className="item-des">{movieItem.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
