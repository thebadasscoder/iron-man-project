import React, { Component } from 'react';
import './css/navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation_container">
        <h4 className="signin">Sign In</h4>
        <button className="signup_button">Sign Up</button>
      </div>
    );
  }
}

export default Navigation;
