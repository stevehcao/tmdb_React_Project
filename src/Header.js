import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      toSearch: false
    };
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
    this.setState(() => ({
      toSearch: true
    }));
  };

  render() {
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
                value={this.state.searchTerm}
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

export default Header;
