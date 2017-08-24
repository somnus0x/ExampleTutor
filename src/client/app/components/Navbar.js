import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/navbar.css";
import MobileNavbar from './MobileNavbar.js'
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
                                Line : <a className = 'line' href = 'http://line.me/ti/p/@mwp5636g'>CULearningHome</a>
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
                                <ul className="dropdown-menu multi-level m-green" role="menu" aria-labelledby="dropdownMenu">
                                  <li><Link to = '/course' style={{ textDecoration: 'none' }}>อนุบาล</Link></li>
                                  <li><Link to = '/primaryschool' style={{ textDecoration: 'none' }}>ประถมต้นและปลาย</Link></li>
                                  <li><a href="#">มัธยม</a></li>
                                  <li><a href="#">มหาลัย</a></li>
                                  <li className="divider"></li>
                                  <li className="dropdown-submenu">
                                    <a tabindex="-1" href="#">ติวสอบ</a>
                                    <ul className="dropdown-menu m-green">
                                      <li><a href="#">กลางภาค/ปลายภาค</a></li>
                                      <li><a href="#">GAT-PAT/7 วิชาสามัญ/O-NET</a></li>
                                      <li><a href="#">TU-GET /CU-TEP/ IGCSE /SAT /CU –ATT/ CU-TEP</a></li>
                                    </ul>
                                  </li>
                                </ul>
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
                            <Link to = '/articles' style={{ textDecoration: 'none' }}>
                            <div className="col-md-2 m-purple header-grid">
                                <img src={"src/client/app/assets/logo/appbar.book.open.text.png"} />
                            	<span className ='navbar-item'>สูตรลับเรียนเก่ง</span>

                        	</div>
                            </Link>
                        </div>
                    </div>
                </Desktop>
                <Tablet>
                    <div className = 'navbar-wrapper'>
                        <div className = 'row contact-row'>
                            <div className = 'col-sm-3 col-sm-offset-4'>
                                <img src = {"src/client/app/assets/logo/phone.png"}  />
                                Contact : 096 883-4441
                            </div>
                            <div className = 'col-sm-3 line'>
                                <img src = {"src/client/app/assets/logo/line.png"}  />
                                Line : <a className = 'line' href = 'http://line.me/ti/p/@mwp5636g'>CULearningHome</a>
                            </div>
                            <div className = 'col-sm-2  social-bar'>
                                <img src = {"src/client/app/assets/logo/facebook.png"}  />
                                <img src = {"src/client/app/assets/logo/instagram.png"}  />
                            </div>


                        </div>
                        <div className = 'row menubar-row'>
                            <Link to = '/' style={{ textDecoration: 'none' }}>
                            <div className = 'col-sm-2 header-grid logo-grid'>
                                <img src = {"src/client/app/assets/logo/culearninghome.png"}/>
                            </div>
                            <div className="col-sm-2  m-blue header-grid">
                                <img src={"src/client/app/assets/logo/appbar.home.png"} />
                            	<span className ='navbar-item'>หน้าแรก</span>

                        	</div>
                            </Link>
                            <div className="col-sm-2 m-green header-grid dropdown"  >
                                <img src={"src/client/app/assets/logo/appbar.book.hardcover.open.writing.png"} />
                                <span className ='navbar-item'>หลักสูตร</span>
                                <ul className="dropdown-menu multi-level m-green" role="menu" aria-labelledby="dropdownMenu">
                                  <li><Link to = '/course' style={{ textDecoration: 'none' }}>อนุบาล</Link></li>
                                  <li><Link to = '/primaryschool' style={{ textDecoration: 'none' }}>ประถมต้นและปลาย</Link></li>
                                  <li><a href="#">มัธยม</a></li>
                                  <li><a href="#">มหาลัย</a></li>
                                  <li className="divider"></li>
                                  <li className="dropdown-submenu">
                                    <a tabindex="-1" href="#">ติวสอบ</a>
                                    <ul className="dropdown-menu m-green">
                                      <li><a href="#">กลางภาค/ปลายภาค</a></li>
                                      <li><a href="#">GAT-PAT/7 วิชาสามัญ/O-NET</a></li>
                                      <li><a href="#">TU-GET /CU-TEP/ IGCSE /SAT /CU –ATT/ CU-TEP</a></li>
                                    </ul>
                                  </li>
                                </ul>
                        	</div>
                            <Link to = '/success' style={{ textDecoration: 'none' }} >
                            <div className=" col-sm-2 m-yellow header-grid" >
                                <img src={"src/client/app/assets/logo/appbar.leaderboard.png"} />
                            	<span className ='navbar-item'>ความสำเร็จของเรา</span>
                        	</div>
                            </Link>
                            <Link to = '/register' style={{ textDecoration: 'none' }} >
                            <div className="col-sm-2 m-red header-grid">
                                <img src={"src/client/app/assets/logo/appbar.edit.png"} />
                            	<span className ='navbar-item'>สมัครเรียน</span>
                        	</div>
                            </Link>
                            <Link to = '/articles' style={{ textDecoration: 'none' }}>
                            <div className="col-sm-2 m-purple header-grid">
                                <img src={"src/client/app/assets/logo/appbar.book.open.text.png"} />
                            	<span className ='navbar-item'>สูตรลับเรียนเก่ง</span>

                        	</div>
                            </Link>
                        </div>
                    </div>
                </Tablet>
                <Mobile>
                    <MobileNavbar />
                </Mobile>
            </div>


    );
  }
}

export default Navbar;
