import React, { Component } from 'react';
import CardContainer from './CardContainer';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* card container for modularity */}
        <CardContainer />
      </div>
    );
  }
}

export default Home;
