import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/footer.css";

import {Link} from 'react-router-dom'

class Footer extends React.Component {
  render() {
    return (
        <footer className="custom-footer">

            <div className="footer-below">
                    <div className="row">
                        <div className="col-lg-12">
                            Copyrights &copy; 2017 CULearningHome All Right Reserved.
                        </div>
                    </div>

            </div>
        </footer>

    );
  }
}

export default Footer;
