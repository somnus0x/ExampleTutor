
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
                                <a className="navbar-brand" href="/">CULearninghome</a>
                                </Link>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-left">
                                    <li className="hidden">
                                        <a href="#page-top"></a>
                                    </li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle green" data-toggle="dropdown" href="#">
                                          หลักสูตร
                                        </a>
                                        <ul className="dropdown-menu mobile-multi-level" role="menu">
                                            <li>
                                                <Link to = '/courses' style={{ textDecoration: 'none' }}>
                                                <div className = 'green'>หลักสูตร</div>
                                                </Link>
                                            </li>
                                          <li>
                                              <Link to = '/kindergarten' style={{ textDecoration: 'none' }}>
                                              <div className = 'green'>อนุบาล</div>
                                              </Link>
                                          </li>
                                          <li>
                                              <Link to = '/primaryschool' style={{ textDecoration: 'none' }}>
                                              <div className = 'green'>ประถมต้น</div>
                                              </Link>
                                          </li>
                                          <li>
                                              <Link to = '/course' style={{ textDecoration: 'none' }}>
                                              <div className = 'green'>ประถมปลายและมัธยมต้น</div>
                                              </Link>
                                          </li>
                                          <li>
                                              <Link to = '/course' style={{ textDecoration: 'none' }}>
                                              <div className = 'green'>มัธยมปลาย</div>
                                              </Link>
                                          </li>
                                          <li>
                                              <Link to = '/course' style={{ textDecoration: 'none' }}>
                                              <div className = 'green'>บุคคลทั่วไป</div>
                                              </Link>
                                          </li>

                                        </ul>
                                    </li>
                                    <li>
                                        <div className = 'yellow'>ความสำเร็จของเรา</div>
                                    </li>
                                    <li>
                                        <Link to = '/register' style={{ textDecoration: 'none' }}>
                                            <div className = 'red'>สมัครเรียน</div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to = '/articles' style={{ textDecoration: 'none' }}>
                                            <div className = 'purple'>สูตรลับเรียนเก่ง</div>
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
