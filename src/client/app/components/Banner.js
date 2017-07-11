import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/banner.css";
import {Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'
const Desktop = ({ children }) => <MediaQuery minWidth={1280} children={children} />;
const Tablet = ({ children }) => <MediaQuery minWidth={768} maxWidth={1279} children={children} />;
const Mobile = ({ children }) => <MediaQuery maxWidth={768} children={children} />;


class Banner extends React.Component {
  render() {
    return (
        <div>
            <Desktop>
                <div className = 'desktop-navbar-offset'></div>
            </Desktop>
            <Mobile>
                <div className = 'mobile-navbar-offset'></div>
            </Mobile>
            <Tablet>
                <div className = 'mobile-navbar-offset'></div>
            </Tablet>
            <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
              <ol className="carousel-indicators">
                <li data-target="#bs-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#bs-carousel" data-slide-to="1"></li>
                <li data-target="#bs-carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="item slides active">
                  <div className="slide-1"></div>
                  <div className="hero">
                    <hgroup>
                        <h1>We are creative</h1>
                        <h3>Get start your next awesome project</h3>
                    </hgroup>
                    <button className="btn btn-hero btn-lg" role="button">See all features</button>
                  </div>
                </div>
                <div className="item slides">
                  <div className="slide-2"></div>
                  <div className="hero">
                    <hgroup>
                        <h1>We are smart</h1>
                        <h3>Get start your next awesome project</h3>
                    </hgroup>
                    <button className="btn btn-hero btn-lg" role="button">See all features</button>
                  </div>
                </div>
                <div className="item slides">
                  <div className="slide-3"></div>
                  <div className="hero">
                    <hgroup>
                        <h1>We are amazing</h1>
                        <h3>Get start your next awesome project</h3>
                    </hgroup>
                    <button className="btn btn-hero btn-lg" role="button">See all features</button>
                  </div>
                </div>
              </div>
            </div>
    </div>

    );
  }
}

export default Banner;
