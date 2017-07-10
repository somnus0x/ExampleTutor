import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/register.css";

class Register extends React.Component {
  render() {
    return (
    <div >
            <div className = 'container instruction-container'>
                <img src = 'http://www.beyondstudycenter.com/uploaded/peet/new-how-to-apply.jpg' className="center-block img-responsive"/>
            </div>
            <div className="register-container container">
                <div className="row">

                        <h2 className = 'text-center'>สมัครเรียน</h2>
                        <hr className = 'colored-line m-red'/>

                </div>
                <form className="form-horizontal">
                <fieldset>


                <div className="form-group">
                    <label className="col-md-4 control-label" for="selectbasic">คำนำหน้า</label>
                    <div className="col-md-2">
                        <select id="selectbasic" name="selectbasic" className="form-control">
                          <option value="1">ด.ช.</option>
                          <option value="2">ด.ญ.</option>
                          <option value="3">นาย</option>
                          <option value="4">นางสาว</option>
                        </select>
                     </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" for="textinput">ชื่อ นามสกุล</label>
                  <div className="col-md-2">
                  <input id="textinput" name="textinput" type="text" placeholder="ชื่อ" className="form-control input-md" required=""/>

                  </div>
                  <div className="col-md-2">
                  <input id="textinput" name="textinput" type="text" placeholder="นามสกุล" className="form-control input-md" required=""/>

                  </div>
                </div>



                <div className="form-group">
                  <label className="col-md-4 control-label" for="email">เบอร์ติดต่อ</label>
                  <div className="col-md-4">
                  <input id="email" name="email" type="text" placeholder="096 883-4441" className="form-control input-md" required=""/>

                  </div>
                </div>

                <div className="form-group">
                    <label className="col-md-4 control-label" for="selectbasic">หลักสูตร</label>
                    <div className="col-md-4">
                        <select id="selectbasic" name="selectbasic" className="form-control">
                          <option value="1">ประถม</option>
                          <option value="2">มัธยม</option>
                          <option value="3">มหาลัย</option>
                          <option value="4">ติวสอบ</option>
                        </select>
                     </div>
                </div>
                <div className="form-group">
                    <label className="col-md-4 control-label" for="selectbasic">คอร์สที่เลือก</label>
                    <div className="col-md-4">
                        <select id="selectbasic" name="selectbasic" className="form-control">
                          <option value="1">ประถม</option>
                          <option value="2">มัธยม</option>
                          <option value="3">มหาลัย</option>
                          <option value="4">ติวสอบ</option>
                        </select>
                     </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" for="email">Line ID</label>
                  <div className="col-md-4">
                  <input id="email" name="email" type="text" placeholder="096 883-4441" className="form-control input-md" required=""/>

                  </div>
                </div>


                <div className="form-group">
                  <label className="col-md-4 control-label" for="singlebutton"></label>
                  <div className="col-md-4">
                    <button id="singlebutton" name="singlebutton" className="btn btn-primary">Register</button>
                  </div>
                </div>

                </fieldset>
                </form>
            </div>
    </div>
    );
  }
}

export default Register;
