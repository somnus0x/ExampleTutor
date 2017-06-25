import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/navbar.css";
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
        <div>
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                    <div className="container">
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="#page-top">CU TUTOR</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="hidden">
                                    <a href="#page-top"></a>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                      หลักสูตร
                                    </a>
                                    <ul className="dropdown-menu" role="menu">
                                      <li><a href="#">Action</a></li>
                                      <li><a href="#">Another action</a></li>
                                      <li><a href="#">Something else here</a></li>
                                      <li className="divider"></li>
                                      <li><a href="#">Separated link</a></li>
                                    </ul>
                                </li>
                                <li className="page-scroll">
                                    <a href="#about">อัตราค่าเรียน</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="#contact">ความสำเร็จ</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="#contact">ทีมติวเตอร์</a>
                                </li>
                                <li className="page-scroll">
                                    <a href="#contact">สมัครเรียน</a>
                                </li>
                            </ul>
                        </div>
                    </div>

            </nav>
</div>

    );
  }
}

export default Navbar;
