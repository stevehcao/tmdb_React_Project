import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends Component {
  render() {
    return (
      <div className="MovieCard">
        {/* title, rating, pic/poster, desc */}
        <Link to="/movieDetails">
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              this.props.movie.poster_path
            }`}
            alt="#"
          />
        </Link>
        <div className="title">
          <b>Title:</b> {this.props.movie.title}
        </div>
        <div className="description">
          <b>Description:</b> {this.props.movie.overview}
        </div>
        <div className="popularity">
          <b>Popularity:</b> {this.props.movie.popularity}
        </div>
      </div>
    );
  }
}

export default MovieCard;
