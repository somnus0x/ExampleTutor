import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './FrontPage.js';
import Page from './Page.js';
import Pricing from './Pricing.js'
import "../assets/css/index.css";
import { Router, Route ,Switch} from 'react-router'
import { HashRouter,IndexRoute} from 'react-router-dom'
import $ from 'jquery';

class Main extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Page>
                    <Route exact path = '/' component = {FrontPage} />
                    <Route path = '/pricing' component = {Pricing}/>
                </Page >
            </div>
        );
  }
}

export default Main;
