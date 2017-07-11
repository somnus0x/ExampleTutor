import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/articles.css";
import MediaQuery from 'react-responsive'
import {Link} from 'react-router-dom'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;
class Articles extends React.Component {
    render() {
        return (
            <div className="container">
                <Desktop>
                    <div className='desktop-navbar-offset'></div>
                </Desktop>
                <Mobile>
                    <div className='mobile-navbar-offset'></div>
                </Mobile>
                <Tablet>
                    <div className='mobile-navbar-offset'></div>
                </Tablet>

                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center">สูตรลับเรียนเก่ง
                        </h2>
                        <hr className = 'colored-line m-purple'/>
                    </div>
                </div>
                <div className="row article-row">
                    <div className="col-md-5 col-md-offset-2">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <h3>Project One</h3>
                        <h4>Subheading</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita</p>
                        <Link to = '/article' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                </div>

                <div className="row article-row">
                    <div className="col-md-5 col-md-offset-2">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <h3>Project One</h3>
                        <h4>Subheading</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita</p>
                        <Link to = '/article' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                </div>

                <div className="row article-row">
                    <div className="col-md-5 col-md-offset-2">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <h3>Project One</h3>
                        <h4>Subheading</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita</p>
                        <Link to = '/article' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                </div>

                <div className="row article-row">
                    <div className="col-md-5 col-md-offset-2">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <h3>Project One</h3>
                        <h4>Subheading</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita</p>
                        <Link to = '/article' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                </div>

                <div className="row article-row">
                    <div className="col-md-5 col-md-offset-2">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-3">
                        <h3>Project One</h3>
                        <h4>Subheading</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita</p>
                        <Link to = '/article' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <ul className="pagination">
                            <li>
                                <a href="#">&laquo;</a>
                            </li>
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">5</a>
                            </li>
                            <li>
                                <a href="#">&raquo;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Articles;
