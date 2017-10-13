import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/register.css";
import MediaQuery from 'react-responsive'
import RegisterForm from './RegisterForm.js'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;

class Register extends React.Component {
    render() {
        return (
            <div >
                <Desktop>
                    <div className='desktop-navbar-offset'></div>
                </Desktop>
                <Mobile>
                    <div className='mobile-navbar-offset'></div>
                </Mobile>
                <Tablet>
                    <div className='desktop-navbar-offset'></div>
                </Tablet>
                <Desktop>
                    <div className='register-wrapper'>
                        <div className='container '>
                            <img src='src/client/app/assets/images/process.jpg' className="center-block img-responsive register-instruction"/>
                        </div>
                        <div className="register-container">
                            <div className="row register-header">
                                <div className = 'col-md-4 col-md-offset-4 m-yellow'>
                                    <h2 className='text-center'>สมัครเรียน</h2>
                                </div>
                            </div>
                            <RegisterForm />
                        </div>
                    </div>
                </Desktop>
                <Tablet>
                    <div className='mobile-register-wrapper'>
                        <div className='container '>
                            <img src='src/client/app/assets/images/process.jpg' className="center-block img-responsive"/>
                        </div>
                        <div className="register-container">
                            <div className="row register-header">
                                <div className = 'col-md-4 col-md-offset-4 m-red'>
                                    <h2 className='text-center'>สมัครเรียน</h2>
                                </div>
                            </div>
                            <RegisterForm />
                        </div>
                    </div>
                </Tablet>
                <Mobile>
                    <div className='mobile-register-wrapper'>
                        <div className='container '>
                            <img src='src/client/app/assets/images/process.jpg' className="center-block img-responsive"/>
                        </div>
                        <div className="register-container container">
                            <div className="row register-header">
                                <div className = 'col-sm-4 col-sm-offset-4 m-red'>
                                    <h2 className='text-center'>สมัครเรียน</h2>
                                </div>
                            </div>
                            <RegisterForm />
                        </div>
                    </div>
                </Mobile>
            </div>
        );
    }
}

export default Register;
