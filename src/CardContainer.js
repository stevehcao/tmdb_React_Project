import React, { Component } from 'react';
import MovieCard from './MovieCard';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const movies = this.props.nowPlaying.map(movie => (
      <MovieCard info={movie} key={movie.id} />
    ));
    return <div>{movies}</div>;
  }
}

export default CardContainer;
