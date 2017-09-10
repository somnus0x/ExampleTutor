import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/articles.css";
import MediaQuery from 'react-responsive'
import ArticleRow from './ArticleRow.js'
import MobileArticleRow from './MobileArticleRow.js'
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
                    <div className='desktop-navbar-offset'></div>
                </Tablet>

                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center">สูตรลับเรียนเก่ง
                        </h2>
                        <hr className = 'colored-line m-purple'/>
                    </div>
                </div>
                <Desktop>
                    <ArticleRow />

                </Desktop>
                <Tablet>
                    <ArticleRow />
                </Tablet>
                <Mobile>
                    <MobileArticleRow />

                </Mobile>


            </div>
        );
    }
}

export default Articles;
