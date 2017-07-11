
import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/mobile-navbar.css";
import {Link} from 'react-router-dom'


class MobileNavbar extends React.Component
{
    render() {
        return (
            <div>
                <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">

                            <div className="navbar-header page-scroll">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                                </button>
                                <Link to = '/' style={{ textDecoration: 'none' }}>
                                <a className="navbar-brand" href="/">CU TUTOR</a>
                                </Link>
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
                                        <ul className="dropdown-menu mobile-multi-level" role="menu">
                                          <li>
                                              <Link to = '/course' style={{ textDecoration: 'none' }}>
                                              <a href="">อนุบาล</a>
                                              </Link>
                                          </li>
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
                                    <li>
                                        <Link to = '/success' style={{ textDecoration: 'none' }}>
                                        <a href="">ความสำเร็จของเรา</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to = '/register' style={{ textDecoration: 'none' }}>
                                        <a href="">สมัครเรียน</a>
                                        </Link>
                                    </li>
                                    <li >
                                        <Link to = '/articles' style={{ textDecoration: 'none' }}>
                                        <a href="">สูตรลับเรียนเก่ง</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                </nav>
            </div>
        );
    }
}
export default MobileNavbar;
