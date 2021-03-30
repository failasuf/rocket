import React from "react";
import { Link } from "react-router-dom";

export default function Cards({ data } ) {
  return data.map((item, i) => {
    return (
      <div className="col-2">
        <Link to={`details/${item.id}/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
        <img
          key={i}
          alt="placeholder 960"
          className="img-fluid w-100 h-60"
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        ></img>
        <h6>{item.title}</h6>
        <p>{item.release_date}</p>
        </Link>
      </div>
    );
  });
}