import React, { Component } from 'react';
import CardContainer from './CardContainer';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'cat',
      whatever: '',
      nowPlaying: [] // expect to get an array of object, each object is a current movie playing
    };
  }

  async componentDidMount() {
    // ajax calls here
    const url =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=030119b23a02cdf2de513ef212576e8e&language=en-US&page=1';
    let results = await axios.get(url);
    this.setState({
      // destructure in order to keep everything else in state
      ...this.state,
      nowPlaying: results.data.results
    });
  }

  render() {
    return (
      <div className="Home">
        {/* card container for modularity */}
        <CardContainer nowPlaying={this.state.nowPlaying} />
      </div>
    );
  }
}

export default Home;
