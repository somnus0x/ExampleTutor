import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/articles.css";
import MediaQuery from 'react-responsive'
import {Link} from 'react-router-dom'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;
class MobileArticleRow extends React.Component {
    render() {
        return (
            <div>
                <div className="row mobile-article-row">
                    <div className="col-md-4 ">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <h3>อนุบาล</h3>
                        <h4>Subheading</h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita
                        <br/>
                        <Link to = '/kindergartenarticle' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary mobile-article-button-padding" href="#">View Project <span className="glyphicon glyphicon-chevron-right "></span></a>
                    </Link>
                    </div>
                    <div className="col-md-4 ">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <h3>ประถม</h3>
                        <h4>Subheading</h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita
                        <br/>
                        <Link to = '/article' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary mobile-article-button-padding" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                </div>
                <div className="row mobile-article-row">
                    <div className="col-md-4 ">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <h3>มัธยมปลาย</h3>
                        <h4>Subheading</h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita
                        <br/>
                        <Link to = '/collegearticle' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary mobile-article-button-padding" href="#">View Project <span className="glyphicon glyphicon-chevron-right "></span></a>
                    </Link>
                    </div>
                    <div className="col-md-4 ">
                        <a href="#">
                            <img className="img-responsive" src="http://placehold.it/500x300" alt=""/>
                        </a>
                    </div>
                    <div className="col-md-2">
                        <h3>บัญชี</h3>
                        <h4>Subheading</h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita
                        <br/>
                        <Link to = '/accountingarticle' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary mobile-article-button-padding" href="#">View Project <span className="glyphicon glyphicon-chevron-right "></span></a>
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileArticleRow;
