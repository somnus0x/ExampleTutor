import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/OurSuccess.css";
class OurSuccess extends React.Component{
    render(){
        return(
            <div>
                <div className = 'banner'></div>
                <div className = 'container showcase-container'>
                    <div className = 'showcase-header-wrapper'>
                        <h2>ผลงานการสอน</h2>
                        <hr className ='colored-line m-yellow' />
                    </div>
                    <div className = 'row'>
                        <div className = 'col-md-6'>
                            <div className ='showcase'>
                                <img src = 'src/client/app/assets/images/nelson.jpg' />
                                <div className = 'caption'>
                                    <strong> Name </strong> : Nelson Mandela<br/>
                                    <strong> Nickname</strong> : Nelly<br/>
                                    <strong> School </strong> : Quote University<br />
                                    <strong> GPAX </strong> : 4.00 <br/>
                                    <strong> Notable Admission </strong> : Oxford University , Stanford University
                                </div>
                            </div>
                        </div>
                        <div className = 'col-md-6'>
                            <div className ='showcase'>
                                <img src = 'src/client/app/assets/images/nelson.jpg' />
                                <div className = 'caption'>
                                    <strong> Name </strong> : Nelson Mandela<br/>
                                    <strong> Nickname</strong> : Nelly<br/>
                                    <strong> School </strong> : Quote University<br />
                                    <strong> GPAX </strong> : 4.00 <br/>
                                    <strong> Notable Admission </strong> : Oxford University , Stanford University
                                </div>
                            </div>
                        </div>
                </div>
                <div className = 'row'>
                    <div className = 'col-md-6'>
                        <div className ='showcase'>
                            <img src = 'src/client/app/assets/images/nelson.jpg' />
                            <div className = 'caption'>
                                <strong> Name </strong> : Nelson Mandela<br/>
                                <strong> Nickname</strong> : Nelly<br/>
                                <strong> School </strong> : Quote University<br />
                                <strong> GPAX </strong> : 4.00 <br/>
                                <strong> Notable Admission </strong> : Oxford University , Stanford University
                            </div>
                        </div>
                    </div>
                    <div className = 'col-md-6'>
                        <div className ='showcase'>
                            <img src = 'src/client/app/assets/images/nelson.jpg' />
                            <div className = 'caption'>
                                <strong> Name </strong> : Nelson Mandela<br/>
                                <strong> Nickname</strong> : Nelly<br/>
                                <strong> School </strong> : Quote University<br />
                                <strong> GPAX </strong> : 4.00 <br/>
                                <strong> Notable Admission </strong> : Oxford University , Stanford University
                            </div>
                        </div>
                    </div>
            </div>
                </div>

            </div>
        );
    }
}

export default OurSuccess;
