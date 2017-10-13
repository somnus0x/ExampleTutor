import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/articles.css";
import "../assets/css/article.css";
import MediaQuery from 'react-responsive'
import {Link} from 'react-router-dom'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;
class ArticleRow extends React.Component {
    render() {
        return (
            <div>
                <div className="row article-row">
                    <div className="col-md-4 card">
                        <img className="img-responsive" src="src/client/app/assets/images/kindergarten1.jpg" alt=""/>
                    </div>
                    <div className="col-md-2">
                        <h3 className = 'article-header'>อนุบาล</h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita
                        <br/>
                        <Link to = '/kindergartenarticle' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                    <div className="col-md-4 ">
                        <img className="img-responsive" src='src/client/app/assets/images/primaryschoolarticle.jpg' alt=""/>
                    </div>
                    <div className="col-md-2">
                        <h3 className = 'article-header'>ประถม</h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita
                        <br/>
                        <Link to = '/article' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                </div>
                <div className="row article-row">
                    <div className="col-md-4 ">
                        <img className="img-responsive" src='src/client/app/assets/images/collegearticle.jpg' alt=""/>
                    </div>
                    <div className="col-md-2">
                        <h3 className = 'article-header'>มัธยมปลาย</h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita
                        <br/>
                        <Link to = '/collegearticle' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                    <div className="col-md-4 ">
                        <img className="img-responsive" src="src/client/app/assets/images/accountingCover.png" alt=""/>
                    </div>
                    <div className="col-md-2">
                        <h3 className = 'article-header'>บัญชี</h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita
                        <br/>
                        <Link to = '/accountingarticle' style={{ textDecoration: 'none' }}>
                        <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleRow;
