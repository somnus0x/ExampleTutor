import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './FrontPage.js';
import Page from './Page.js';
import Courses from './Courses.js'
import Register from './Register.js'
import OurSuccess from './OurSuccess.js'
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
                    <Route path = '/register' component = {Register}/>
                    <Route path = '/success' component = {OurSuccess}/>
                </Page>
            </div>
        );
  }
}

export default Main;
