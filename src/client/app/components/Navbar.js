import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/navbar.css";
import {Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'

class Navbar extends React.Component {
  render() {
    return (
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
                <div className="col-md-2 col-md-offset-2 m-blue header-grid">
                    <img src={"src/client/app/assets/logo/appbar.home.png"} />
                	<span className ='navbar-item'>หน้าแรก</span>

            	</div>
                <div className="col-md-2 m-green header-grid dropdown" >
                    <img src={"src/client/app/assets/logo/appbar.book.hardcover.open.writing.png"} />
                    <span className ='navbar-item'>หลักสูตร</span>
                    <div className="dropdown-content">
                        <div className = 'dropdown-item'>อนุบาล</div>
                        <div className = 'dropdown-item'>ประถมต้นและปลาย</div>
                        <div className = 'dropdown-item'>มัธยมต้นและปลาย</div>
                        <div className = 'dropdown-item'>มหาลัย</div>
                    </div>

            	</div>
                <div className=" col-md-2 m-yellow header-grid" >
                    <img src={"src/client/app/assets/logo/appbar.leaderboard.png"} />
                	<span className ='navbar-item'>สูตรลับความสำเร็จ</span>

            	</div>
                <div className="col-md-2 m-red header-grid">
                    <img src={"src/client/app/assets/logo/appbar.edit.png"} />
                	<span className ='navbar-item'>สมัครเรียน</span>

            	</div>
                <div className="col-md-2 m-purple header-grid">
                    <img src={"src/client/app/assets/logo/appbar.phone.png"} />
                	<span className ='navbar-item'>ติดต่อเรา</span>

            	</div>
            </div>
        </div>



    );
  }
}

export default Navbar;
