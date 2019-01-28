import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {
  render() {
    return (
      <div className="MovieCard">
        {/* title, rating, pic/poster, desc */}
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            this.props.movie.poster_path
          }`}
          alt="#"
        />
        <div>{this.props.movie.title}</div>
        <div>{this.props.movie.overview}</div>
        <div>{this.props.movie.popularity}</div>
      </div>
    );
  }
}

export default MovieCard;
