import React, { Component } from 'react';
import Home from './containers/Home';
import MovieDetails from './MovieDetails';
import Search from './containers/Search';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              {/* if there is no exact path to "/" even /moviedetails will direct to homepage */}
              {/* also can use render props to pass component into Route */}
              {/* switch makes route a switch statement starting from the top */}
              <Route exact path="/" component={Home} />
              <Route path="/movieDetails/:id" component={MovieDetails} />
              <Route path="/search/:query" component={Search} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
