import React, { Component } from 'react';
import CardContainer from './CardContainer';
import Header from './Header';
import axios from 'axios';

class Search extends Component {
  state = {
    foundMoviesArr: [] // arr of objects of found movies from query
  };

  async componentDidMount() {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=030119b23a02cdf2de513ef212576e8e&language=en-US&query=${
        this.props.match.params.query
      }&page=1&include_adult=false`;
      const foundMovies = await axios.get(url);
      this.setState({
        ...this.state,
        foundMoviesArr: foundMovies.data.results
      });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidUpdate(prevProps) {
    // need conditional to prevent infinite loop
    if (this.props.match.params.query !== prevProps.match.params.query) {
      try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=030119b23a02cdf2de513ef212576e8e&language=en-US&query=${
          this.props.match.params.query
        }&page=1&include_adult=false`;
        const foundMovies = await axios.get(url);
        this.setState({
          ...this.state,
          foundMoviesArr: foundMovies.data.results
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
  render() {
    return (
      <div className="search">
        <Header />
        {/* fill out with found movie cards */}
        <CardContainer moviesArr={this.state.foundMoviesArr} />
        {/* maybe display placeholder if no movies found */}
      </div>
    );
  }
}

export default Search;
