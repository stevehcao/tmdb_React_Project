import React, { Component } from 'react';
import MovieCard from './MovieCard';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MovieCard>Testing</MovieCard>
      </div>
    );
  }
}

export default CardContainer;
