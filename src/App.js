import React, { Component } from 'react';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Search from './Search';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* switch will make it exact path */}
            {/* if there is no exact path to "/" even /moviedetails will direct to homepage */}
            {/* also can use render props to pass component into Route */}
            <Route exact path="/" component={Home} />
            <Route path="/movieDetails/:id" component={MovieDetails} />
            <Route path="/search/:query" component={Search} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
