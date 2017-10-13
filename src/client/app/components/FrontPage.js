import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner.js';
import MottoParallax from './MottoParallax.js';
import TutorInfoSection from './TutorInfoSection.js';
import "../assets/css/index.css";

class FrontPage extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <TutorInfoSection />
                <MottoParallax />
            </div>
        );
  }
}

export default FrontPage;
