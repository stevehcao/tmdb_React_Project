import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: '',
      toSearch: false
    };

    // this.handleSubmit = this.handleSubmit.bind(this);  // if you aren't using arrow syntax
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // this set state is async and does not always immediately update component
    // use callback to guarantee fire after the update has been applied
    this.props.history.push(`/search/${this.state.searchMovie}`);
    // this.setState(() => ({
    //   toSearch: true
    // }));
  };

  render() {
    // send to search page if looking for movies
    // if (this.state.toSearch === true) {
    //   return <Redirect to={`/search/${this.state.searchMovie}`} />;
    // }

    return (
      <div className="header">
        {/* nav bar */}
        <div>Movies!!!</div>
        <Link to="/">
          <div>Home</div>
        </Link>
        {/* search bar */}
        <div className="searchBar">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">
              <input
                onChange={this.handleChange}
                type="text"
                id="search"
                name="searchMovie"
                className="searchMovie"
                value={this.state.searchMovie}
                placeholder="Search for Movies"
              />
            </label>
            <input type="submit" value="Search" className="searchbar-button" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
