import React from "react";

export const IMG_API = "https://image.tmdb.org/t/p/w1280";
const imgSrc =
  "https://images.unsplash.com/photo-1547248085-bf272dd7cb4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
const MovieContainer = (props) => {
  const setVoteCount = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <article className="card">
      <img
        src={props.poster_path ? IMG_API + props.poster_path : imgSrc}
        alt="path"
      />
      <p className="overview">{props.overview}</p>
      <div className="vote">
        <span className={`tag ${setVoteCount(props.vote_average)}`}>
          {props.vote_average}
        </span>
        <span>{props.vote_count}</span>
      </div>
    </article>
  );
};

export default MovieContainer;
