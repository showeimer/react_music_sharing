import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className='jumbotron bg-warning'>
        <h1 className="display-3">Music Share</h1>
        <hr className="my-4" />
        <p className="lead">Enter in your favorite songs and share your playlist with your friends!</p>
      </nav>
    )
  }
}

export default NavBar;
