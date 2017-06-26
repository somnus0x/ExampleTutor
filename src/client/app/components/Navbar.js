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
                            <a className="navbar-brand" ><Link to="/" >CU TUTOR</Link></a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-left">
                                <li className="hidden">
                                    <a ></a>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" >
                                      หลักสูตร
                                    </a>
                                    <ul className="dropdown-menu multi-level" role="menu">
                                      <li><a ><Link to="/course"  className="item">อนุบาล</Link></a></li>
                                      <li><a >ประถม</a></li>
                                      <li><a >มหาวิทยาลัย</a></li>
                                      <li className="divider"></li>
                                      <li className="dropdown-submenu">
                                        <a tabIndex="-1" href="#">ติวสอบ</a>
                                        <ul className="dropdown-menu">
                                          <li><a tabIndex="-1">กลางภาค/ปลายภาค</a></li>
                                          <li><a >GAT-PAT/7 วิชาสามัญ/O-NET</a></li>
                                          <li><a >TU-GET /CU-TEP/ IGCSE /SAT /CU –ATT/ CU-TEP</a></li>
                                        </ul>
                                      </li>
                                    </ul>
                                </li>
                                <li className="page-scroll">
                                    <a >อัตราค่าเรียน</a>
                                </li>
                                <li className="page-scroll">
                                    <a >ความสำเร็จ</a>
                                </li>
                                <li className="page-scroll">
                                    <a >ทีมติวเตอร์</a>
                                </li>
                                <li className="page-scroll">
                                    <a ><Link to="/register">สมัครเรียน</Link></a>
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
