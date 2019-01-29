import React, { Component } from 'react';
import MovieCard from './MovieCard';
import './CardContainer.css';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const movies = this.props.moviesArr.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ));
    return <div className="card-container">{movies}</div>;
  }
}

export default CardContainer;
