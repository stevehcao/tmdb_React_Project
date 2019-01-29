import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';

class MovieDetails extends Component {
  state = {
    movieDetails: {}
  };

  async componentDidMount() {
    try {
      const url = `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }?api_key=030119b23a02cdf2de513ef212576e8e&language=en-US`;
      const movieDetails = await axios.get(url);
      this.setState({ ...this.state, movieDetails: movieDetails });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="MovieDeatils">
        <Header />
        Movie Details
      </div>
    );
  }
}

export default MovieDetails;
