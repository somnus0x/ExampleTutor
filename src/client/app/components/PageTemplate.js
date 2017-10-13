import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import "../assets/css/index.css";

class PageTemplate extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                    {this.props.children}
                <Footer />
            </div>
        );
  }
}

export default PageTemplate;
