import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/parallax.css";


import {Link} from 'react-router-dom'

class MottoParallax extends React.Component {
  render() {
    return (
        <div>
        <section className="section parallax parallax-1">
          <div className="container">
            <h1>Your children success is our goal!</h1>
          </div>
        </section>
    </div>
    );
  }
}

export default MottoParallax;
