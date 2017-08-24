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
            <div >
            	<div className="row">
            	    <div id="myCarousel" className="carousel  slide">
            	        <ol className="carousel-indicators">
            	            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            	            <li data-target="#myCarousel" data-slide-to="1"></li>
            	            <li data-target="#myCarousel" data-slide-to="2"></li>
            	        </ol>
            	        <div className="carousel-inner">
            	            <div className="active item">
            	                <img src="src/client/app/assets/images/slide1.jpg" className="img-responsive" />
            	            </div>
            	            <div className="item">
            	                <img src="src/client/app/assets/images/slide1.jpg" className="img-responsive" />
            	            </div>
            	            <div className="item">
            	                <img src="src/client/app/assets/images/slide1.jpg" className="img-responsive"/>
            	            </div>
            	        </div>
            	        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            	            <span className="glyphicon glyphicon-chevron-left"></span>
            	        </a>
            	        <a className="right carousel-control" href="#myCarousel" data-slide="next">
            	            <span className="glyphicon glyphicon-chevron-right"></span>
            	        </a>
            	    </div>
            	</div>
            </div>
        </div>

    );
  }
}

export default Banner;
