import React from 'react';
import ReactDOM from 'react-dom';


class Footer extends React.Component {
  render() {
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        <div className="footer-col col-md-4">
                            <h3>Location</h3>
                            <p>3481 Melrose Place
                                <br/>Beverly Hills, CA 90210</p>
                        </div>
                        <div className="footer-col col-md-4">
                            
                        </div>
                        <div className="footer-col col-md-4">
                            <h3>About Freelancer</h3>
                            <p>Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            Copyright &copy; Your Website 2016
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
  }
}

export default Footer;
