import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
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
                <Navbar />
                <Banner />
            </div>
        );
  }
}

export default Main;
