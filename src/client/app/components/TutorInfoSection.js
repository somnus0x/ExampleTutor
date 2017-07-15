import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/TutorInfoSection.css";
import MediaQuery from 'react-responsive'
import {Link} from 'react-router-dom'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>
class TutorInfoSection extends React.Component {
    render() {
        return (
            <div>
                <Desktop>
                <div className="tutor-wrapper">
                    <div className="container tutor-container">
                        <div className="row">
                            <div className="col-md-12 text-center section-heading">
                                <h2 >Why Us ?</h2>
                                <hr className='colored-line m-blue'/>
                            </div>
                        </div>
                        <div className="row tutor-row">
                            <div className="col-md-2 metro-grid m-blue col-md-offset-2">
                                <img src ={'src/client/app/assets/logo/appbar.money.png'}/>
                                <p className="tutor-row-text">รับประกันคุณภาพ หากไม่พอใจการสอน ยินดีคืนเงินเต็มจำนวน</p>
                            </div>
                            <div className="col-md-2 metro-grid m-green">
                                <img src ={'src/client/app/assets/logo/appbar.lightbulb.png'}/>
                                <p className="tutor-row-text">ยินดีให้คำปรึกษา แนะแนวการเรียน โดยพี่ๆผู้เชี่ยวชาญทางด้านการเรียนการสอน มากกว่า 3 ปี</p>
                            </div>
                            <div className="col-md-2 metro-grid m-yellow">
                                <img src ={'src/client/app/assets/logo/appbar.money.png'}/>
                                <p className="tutor-row-text">เริ่มต้นเพียง 150 บาท/ชม เท่านั้น</p>
                            </div>
                            <div className="col-md-2 metro-grid m-purple">
                                <img src ={'src/client/app/assets/logo/appbar.star.png'}/>
                                <p className="tutor-row-text">“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา” “Your children success is our goal”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div className="tutor-wrapper">
                    <div className="container tutor-container">
                        <div className="row">
                            <div className="col-md-12 text-center section-heading">
                                <h2 >Why Us ?</h2>
                                <hr className='colored-line m-blue'/>
                            </div>
                        </div>
                        <div className="row mobile-tutor-row">
                            <div className="col-md-2 mobile-metro-grid m-blue col-md-offset-2 center-block">
                                <img src ={'src/client/app/assets/logo/appbar.money.png'}/>
                                <p className="tutor-row-text">รับประกันคุณภาพ หากไม่พอใจการสอน ยินดีคืนเงินเต็มจำนวน</p>
                            </div>
                            <div className="col-md-2 mobile-metro-grid m-green center-block">
                                <img src ={'src/client/app/assets/logo/appbar.lightbulb.png'}/>
                                <p className="tutor-row-text">ยินดีให้คำปรึกษา แนะแนวการเรียน โดยพี่ๆผู้เชี่ยวชาญทางด้านการเรียนการสอน มากกว่า 3 ปี</p>
                            </div>
                            <div className="col-md-2 mobile-metro-grid m-yellow center-block">
                                <img src ={'src/client/app/assets/logo/appbar.money.png'}/>
                                <p className="tutor-row-text">เริ่มต้นเพียง 150 บาท/ชม เท่านั้น</p>
                            </div>
                            <div className="col-md-2 mobile-metro-grid m-purple center-block">
                                <img src ={'src/client/app/assets/logo/appbar.star.png'}/>
                                <p className="tutor-row-text">“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา” “Your children success is our goal”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div className="tutor-wrapper">
                    <div className="container tutor-container">
                        <div className="row">
                            <div className="col-md-12 text-center section-heading">
                                <h2 >Why Us ?</h2>
                                <hr className='colored-line m-blue'/>
                            </div>
                        </div>
                        <div className="row mobile-tutor-row">
                            <div className="col-md-2 mobile-metro-grid m-blue col-md-offset-2 center-block">
                                <img src ={'src/client/app/assets/logo/appbar.money.png'}/>
                                <p className="tutor-row-text">รับประกันคุณภาพ หากไม่พอใจการสอน ยินดีคืนเงินเต็มจำนวน</p>
                            </div>
                            <div className="col-md-2 mobile-metro-grid m-green center-block">
                                <img src ={'src/client/app/assets/logo/appbar.lightbulb.png'}/>
                                <p className="tutor-row-text">ยินดีให้คำปรึกษา แนะแนวการเรียน โดยพี่ๆผู้เชี่ยวชาญทางด้านการเรียนการสอน มากกว่า 3 ปี</p>
                            </div>
                            <div className="col-md-2 mobile-metro-grid m-yellow center-block">
                                <img src ={'src/client/app/assets/logo/appbar.money.png'}/>
                                <p className="tutor-row-text">เริ่มต้นเพียง 150 บาท/ชม เท่านั้น</p>
                            </div>
                            <div className="col-md-2 mobile-metro-grid m-purple center-block">
                                <img src ={'src/client/app/assets/logo/appbar.star.png'}/>
                                <p className="tutor-row-text">“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา” “Your children success is our goal”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Mobile>
            </div>

        );
    }
}

export default TutorInfoSection;
