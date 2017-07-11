import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/article.css";
import MediaQuery from 'react-responsive'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;
class Article extends React.Component {
    render() {
        return (
            <div>
                <Desktop>
                    <div className='desktop-navbar-offset'></div>
                </Desktop>
                <Mobile>
                    <div className='mobile-navbar-offset'></div>
                </Mobile>
                <Tablet>
                    <div className='mobile-navbar-offset'></div>
                </Tablet>
                <Desktop>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-center">สูตรลับเรียนเก่ง
                                </h2>
                                <hr className = 'colored-line m-purple'/>
                            </div>
                        </div>
                        <div className="row article-row">
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-8">
                                <a href="#">
                                    <img className="img-responsive article-image" src="http://placehold.it/1200x500" alt=""/>
                                </a>
                                <p className = 'article-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita</p>
                            </div>
                        </div>
                    </div>
            </Desktop>
            <Tablet>
                <div className="container mobile-article-padding">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-center">สูตรลับเรียนเก่ง
                            </h2>
                            <hr className = 'colored-line m-purple'/>
                        </div>
                    </div>
                    <div className="row article-row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8">
                            <a href="#">
                                <img className="img-responsive article-image" src="http://placehold.it/1200x500" alt=""/>
                            </a>
                            <p className = 'article-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita</p>
                        </div>
                    </div>
                </div>
            </Tablet>>
            <Mobile>
                <div className="container mobile-article-padding">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-center">สูตรลับเรียนเก่ง
                            </h2>
                            <hr className = 'colored-line m-purple'/>
                        </div>
                    </div>
                    <div className="row article-row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-8">
                            <a href="#">
                                <img className="img-responsive article-image" src="http://placehold.it/1200x500" alt=""/>
                            </a>
                            <p className = 'article-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita</p>
                        </div>
                    </div>
                </div>
            </Mobile>
        </div>


        );
    }
}

export default Article;
