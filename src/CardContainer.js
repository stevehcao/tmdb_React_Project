import React, { Component } from 'react';
import MovieCard from './MovieCard';
import './CardContainer.css';

class CardContainer extends Component {
  render() {
    const movies = this.props.moviesArr.map(movie => (
      // movie is an object {id: 2543, title: "Harry Potter", etc...}
      <MovieCard movie={movie} key={movie.id} />
    ));
    return <div className="card-container">{movies}</div>;
  }
}

export default CardContainer;
