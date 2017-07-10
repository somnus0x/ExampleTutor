import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/navbar.css";
import {Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'
const Desktop = ({ children }) => <MediaQuery minWidth={1280} children={children} />;
const Tablet = ({ children }) => <MediaQuery minWidth={768} maxWidth={1279} children={children} />;
const Mobile = ({ children }) => <MediaQuery maxWidth={768} children={children} />;

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <Desktop>
                    <div className = 'navbar-wrapper'>
                        <div className = 'row contact-row'>
                            <div className = 'col-md-2 col-md-offset-7'>
                                <img src = {"src/client/app/assets/logo/phone.png"}  />
                                Contact : 096 883-4441
                            </div>
                            <div className = 'col-md-2 line'>
                                <img src = {"src/client/app/assets/logo/line.png"}  />
                                Line : <a href = 'http://line.me/ti/p/@mwp5636g'>CULearningHome</a>
                            </div>
                            <div className = 'col-md-1  social-bar'>
                                <img src = {"src/client/app/assets/logo/facebook.png"}  />
                                <img src = {"src/client/app/assets/logo/instagram.png"}  />
                            </div>


                        </div>
                        <div className = 'row menubar-row'>
                            <Link to = '/' style={{ textDecoration: 'none' }}>
                            <div className = 'col-md-2 header-grid logo-grid'>
                                <img src = {"src/client/app/assets/logo/culearninghome.png"}/>
                            </div>
                            <div className="col-md-2  m-blue header-grid">
                                <img src={"src/client/app/assets/logo/appbar.home.png"} />
                            	<span className ='navbar-item'>หน้าแรก</span>

                        	</div>
                            </Link>
                            <div className="col-md-2 m-green header-grid dropdown"  >
                                <img src={"src/client/app/assets/logo/appbar.book.hardcover.open.writing.png"} />
                                <span className ='navbar-item'>หลักสูตร</span>
                                <div className="dropdown-content">
                                    <Link to = '/course' style={{ textDecoration: 'none' }} >
                                    <div className = 'dropdown-item'>อนุบาล</div>
                                    </Link>
                                    <div className = 'dropdown-item'>ประถมต้นและปลาย</div>
                                    <div className = 'dropdown-item'>มัธยมต้นและปลาย</div>
                                    <div className = 'dropdown-item'>มหาลัย</div>
                                    <div className = 'dropdown-item-multilevel'>ติวสอบ</div>

                                </div>
                                

                        	</div>
                            <Link to = '/success' style={{ textDecoration: 'none' }} >
                            <div className=" col-md-2 m-yellow header-grid" >
                                <img src={"src/client/app/assets/logo/appbar.leaderboard.png"} />
                            	<span className ='navbar-item'>ความสำเร็จของเรา</span>

                        	</div>
                            </Link>
                            <Link to = '/register' style={{ textDecoration: 'none' }} >
                            <div className="col-md-2 m-red header-grid">
                                <img src={"src/client/app/assets/logo/appbar.edit.png"} />
                            	<span className ='navbar-item'>สมัครเรียน</span>

                        	</div>
                            </Link>
                            <div className="col-md-2 m-purple header-grid">
                                <img src={"src/client/app/assets/logo/appbar.phone.png"} />
                            	<span className ='navbar-item'>ติดต่อเรา</span>

                        	</div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                                <div className="container">
                                    <div className="navbar-header page-scroll">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                                        </button>
                                        <a className="navbar-brand" href="/">CU TUTOR</a>
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
                                                <ul className="dropdown-menu multi-level" role="menu">
                                                  <li><a href="/Course">อนุบาล</a></li>
                                                  <li><a href="#">ประถม</a></li>
                                                  <li><a href="#">มหาวิทยาลัย</a></li>
                                                  <li className="divider"></li>
                                                  <li className="dropdown-submenu">
                                                    <a tabindex="-1" href="#">ติวสอบ</a>
                                                    <ul className="dropdown-menu">
                                                      <li><a tabindex="-1" href="#">กลางภาค/ปลายภาค</a></li>
                                                      <li><a href="#">GAT-PAT/7 วิชาสามัญ/O-NET</a></li>
                                                      <li><a href="#">TU-GET /CU-TEP/ IGCSE /SAT /CU –ATT/ CU-TEP</a></li>
                                                    </ul>
                                                  </li>
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
                                                <a href="/Register">สมัครเรียน</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                        </nav>
            </div>
                </Mobile>
                <Tablet>
                    <div>
                        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
                                <div className="container">
                                    <div className="navbar-header page-scroll">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                                        </button>
                                        <a className="navbar-brand" href="/">CU TUTOR</a>
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
                                                <ul className="dropdown-menu multi-level" role="menu">
                                                  <li><a href="/Course">อนุบาล</a></li>
                                                  <li><a href="#">ประถม</a></li>
                                                  <li><a href="#">มหาวิทยาลัย</a></li>
                                                  <li className="divider"></li>
                                                  <li className="dropdown-submenu">
                                                    <a tabindex="-1" href="#">ติวสอบ</a>
                                                    <ul className="dropdown-menu">
                                                      <li><a tabindex="-1" href="#">กลางภาค/ปลายภาค</a></li>
                                                      <li><a href="#">GAT-PAT/7 วิชาสามัญ/O-NET</a></li>
                                                      <li><a href="#">TU-GET /CU-TEP/ IGCSE /SAT /CU –ATT/ CU-TEP</a></li>
                                                    </ul>
                                                  </li>
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
                                                <a href="/Register">สมัครเรียน</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                        </nav>
            </div>
                </Tablet>
            </div>


    );
  }
}

export default Navbar;
