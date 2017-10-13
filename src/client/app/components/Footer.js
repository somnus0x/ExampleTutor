import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/footer.css";
import FacebookProvider, { Page } from 'react-facebook';

import {Link} from 'react-router-dom'

class Footer extends React.Component {
    componentDidMount() {
          window.fbAsyncInit = function() {
              FB.init({
                  appId      : '115517331888071',
                  cookie     : true,  // enable cookies to allow the server to access the session
                  xfbml      : true,  // parse social plugins on this page
                  version    : 'v2.5' // use version 2.1
              });
          }.bind(this);

          // Load the SDK asynchronously
          (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = "//connect.facebook.net/en_US/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
      }
  render() {
    return (
        <footer className="custom-footer">

            <div className="footer-below">
                    <div className = 'row'>
                        <div className = 'col-md-4 col-sm-4 contact-info'>
                            <div className = 'row'>
                                <img src = {"src/client/app/assets/logo/line.png"}  className = 'footer-line '/>  &nbsp;&nbsp;@culh
                            </div>
                            <div className = 'row'>
                                <img src = {"src/client/app/assets/logo/phone.png"} className = 'footer-phone '  />  &nbsp;&nbsp;096 883-4441
                            </div>
                            <div className = 'row social-row-padding'>
                                <a className = 'facebook' href = 'https://www.facebook.com/CULearningHome/'><img className = 'facebook-footer' src = {"src/client/app/assets/logo/facebook-circle.png"}  /></a>
                                <a className = 'instagram-icon' href = 'https://www.instagram.com/cu_learning_home/'><img className = 'instagram-icon-footer' src = {"src/client/app/assets/logo/instagram-circle.png"}  /></a>
                            </div>

                        </div>
                        <div className = 'col-md-4 col-sm-4'>
                            <FacebookProvider appId="123456789">
                                <Page href="https://facebook.com/CULearningHome" tabs="" />
                            </FacebookProvider>
                        </div>
                    </div>
                    <div className = 'row'>

                    </div>
                    <div className="row footer-margin">
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
