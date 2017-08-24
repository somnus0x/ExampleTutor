import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './FrontPage.js';
import Page from './Page.js';
import Courses from './Courses.js';
import Register from './Register.js';
import OurSuccess from './OurSuccess.js';
import Articles from './Articles.js';
import Article from './Article.js';
import CollegeArticle from './CollegeArticle.js';
import KindergartenArticle from './KindergartenArticle.js';
import PrimarySchool from './PrimarySchool.js';
import AccountingArticle from './AccountingArticle.js';
import "../assets/css/index.css";
import { Router, Route ,Switch} from 'react-router'
import { HashRouter,IndexRoute} from 'react-router-dom'


class Main extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Page>
                    <Route exact path = '/' component = {FrontPage} />
                    <Route path = '/course' component = {Courses}/>
                    <Route path = '/primaryschool' component = {PrimarySchool}/>
                    <Route path = '/register' component = {Register}/>
                    <Route path = '/success' component = {OurSuccess}/>
                    <Route path = '/articles' component = {Articles}/>
                    <Route path = '/article' component = {Article}/>
                    <Route path = '/collegearticle' component = {CollegeArticle}/>
                    <Route path = '/kindergartenarticle' component = {KindergartenArticle}/>
                    <Route path = '/accountingarticle' component = {AccountingArticle}/>
                </Page>
            </div>
        );
  }
}

export default Main;
