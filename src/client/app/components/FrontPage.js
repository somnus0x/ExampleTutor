import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page.js';
import Banner from './Banner.js';
import QuoteSection from './QuoteSection.js';
import TutorInfoSection from './TutorInfoSection.js';
import "../assets/css/index.css";

class FrontPage extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <TutorInfoSection />
                <QuoteSection />
            </div>
        );
  }
}

export default FrontPage;
