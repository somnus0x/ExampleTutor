import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/register.css";

class Register extends React.Component {
  render() {
    return (
    <div>
            <div className = 'container'>
                <img src = 'http://www.beyondstudycenter.com/uploaded/peet/new-how-to-apply.jpg' className="center-block img-responsive"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>สมัครเรียน</h2>
                        <hr className="heart"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2">
                        <form name="sentMessage" id="contactForm" novalidate>
                            <div className="row control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="row control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label for="email">Email Address</label>
                                    <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="row control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label for="phone">Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="row control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label for="message">Message</label>
                                    <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        <br/>
                            <div id="success"></div>
                            <div className="row">
                                <div className="form-group col-xs-12">
                                    <button type="submit" className="btn btn-success btn-lg">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    );
  }
}

export default Register;
