import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/OurSuccess.css";
import MediaQuery from 'react-responsive'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;
class OurSuccess extends React.Component {
    render() {
        return (
            <div>
                <Desktop>
                    <div className='desktop-navbar-offset'></div>
                </Desktop>
                <Mobile>
                    <div className='mobile-navbar-offset'></div>
                </Mobile>
                <Tablet>
                    <div className='mobile-navbar-offset'></div>
                </Tablet>
                <Desktop>
                    <div className='showcase-wrapper'>
                        <div className='banner'></div>
                        <div className='container showcase-container'>
                            <div className='showcase-header-wrapper'>
                                <h2>ผลงานการสอน</h2>
                                <hr className='colored-line m-yellow'/>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Tablet>
                    <div className='showcase-wrapper'>
                        <div className='banner'></div>
                        <div className='container showcase-container'>
                            <div className='showcase-header-wrapper'>
                                <h2>ผลงานการสอน</h2>
                                <hr className='colored-line m-yellow'/>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mobile-showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='mobile-caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mobile-showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='mobile-caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mobile-showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='mobile-caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mobile-showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='mobile-caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tablet>
                <Mobile>
                    <div className='showcase-wrapper'>
                        <div className='banner'></div>
                        <div className='container showcase-container'>
                            <div className='showcase-header-wrapper'>
                                <h2>ผลงานการสอน</h2>
                                <hr className='colored-line m-yellow'/>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mobile-showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='mobile-caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mobile-showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='mobile-caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='mobile-showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='mobile-caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='mobile-showcase'>
                                        <img src='src/client/app/assets/images/nelson.jpg'/>
                                        <div className='mobile-caption'>
                                            <strong>
                                                Name
                                            </strong>
                                            : Nelson Mandela<br/>
                                            <strong>
                                                Nickname</strong>
                                            : Nelly<br/>
                                            <strong>
                                                School
                                            </strong>
                                            : Quote University<br/>
                                            <strong>
                                                GPAX
                                            </strong>
                                            : 4.00
                                            <br/>
                                            <strong>
                                                Notable Admission
                                            </strong>
                                            : Oxford University , Stanford University
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </div>
        );
    }
}

export default OurSuccess;
