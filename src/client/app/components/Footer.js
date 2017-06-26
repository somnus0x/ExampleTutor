import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/index.css";

import {Link} from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Lorem Ipsum</h3>

                        </div>
                        <div className="footer-col col-md-4">
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>About Us</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            Copyright &copy;
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
  }
}

export default Footer;
