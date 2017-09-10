import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/course.css";
import MediaQuery from 'react-responsive'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;

class Courses extends React.Component {
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
                    <div className='course-wrapper'>
                        <div className='container course-container'>

                            <div className = 'row'>
                                <div>
                                    <h2 className='text-center'>อัตราค่าเรียนแบบเดี่ยว</h2>
                                    <hr className="colored-line m-green"/>
                                </div>
                                <div className='col-md-8 col-md-offset-2'>
                                    <img src='src/client/app/assets/images/Course1.jpg' className='img-responsive'/>
                                </div>

                            </div>
                            <div className = 'row course-padding'>
                                <div className ="well">
                                  <strong>พิเศษ</strong> : สำหรับนักเรียนที่ชอบเรียนกับเพื่อนๆ ทางสถาบันมีการสอนแบบกลุ่มเล็ก
                                  จำกัดจำนวนไม่เกิน 3 คน เพื่อประสิทธิภาพในการเรียนมากที่สุด
                                  ประหยัดค่าเรียนมากกว่า 200 บาท*
                                </div>
                            </div>
                            <div className = 'row course-padding'>
                                <div>
                                    <h2 className='text-center'>อัตราค่าเรียนแบบกลุ่ม</h2>
                                    <hr className="colored-line m-yellow"/>
                                </div>
                                <div className='col-md-8 col-md-offset-2'>
                                    <img src='src/client/app/assets/images/Course-2.jpg' className='img-responsive'/>
                                </div>
                            </div>
                            <div className = 'row course-padding'>
                                <div className ="well">
                                  <strong>พิเศษสุด</strong> : สำหรับนักเรียนมัธยมปลายและบุคคลทั่วไป ทางสถาบันมีการเรียนแบบ
                                  คอร์ส แบบเดี่ยวหรือกลุ่มเล็ก ประหยัดค่าเรียนสูงสุดถึง 2400 บาท
                                </div>
                            </div>
                            <div className = 'row course-padding'>
                                <div>
                                    <h2 className='text-center'>อัตราค่าเรียนแบบคอร์ส</h2>
                                    <hr className="colored-line m-blue"/>
                                </div>
                                <div className='col-md-8 col-md-offset-2'>
                                    <img src='src/client/app/assets/images/Course-3.jpg' className='img-responsive'/>
                                </div>
                            </div>
                            <div className = 'row course-padding'>
                                <div className='col-md-8 col-md-offset-2'>
                                    <img src='src/client/app/assets/images/Course-4.jpg' className='img-responsive'/>
                                </div>
                            </div>
                            <div className = 'row course-padding'>
                                <div className='col-md-8 col-md-offset-2'>
                                    <img src='src/client/app/assets/images/Course-5.jpg' className='img-responsive'/>
                                </div>
                            </div>
                            <div className = 'row course-padding'>
                                <div className ="well">
                                  <strong>หมายเหตุ</strong> : ราคาดังกล่าว รวมค่าเดินทาง เอกสารการสอน เรียบร้อยแล้ว
                                  ทางสถาบัน รับประกันคุณภาพการสอน หากไม่พอใจ คืนค่าเรียนเต็มจำนวน และ เปลี่ยนติวเตอร์ให้ฟรี
                                </div>
                            </div>
                        </div>


                    </div>
                </Desktop>
                <Tablet>
                    <div className='mobile-course-wrapper'>
                        <div className='container course-container'>
                            <div className='row'>
                                <div className='col-md-4 col-md-offset-4'>
                                    <img src='src/client/app/assets/images/kindergarten.JPG' className='img-responsive'/>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-center'>อัตราค่าเรียน</h2>
                                <hr className="colored-line m-green"/>
                            </div>
                            <div className='col-md-8 col-md-offset-2'>
                                <img src='src/client/app/assets/images/Course1.jpg' className='img-responsive'/>
                            </div>

                        </div>


                    </div>
                </Tablet>
                <Mobile>
                    <div className='mobile-course-wrapper'>
                        <div className='container course-container'>
                            <div className='row'>
                                <div className='col-md-4 col-md-offset-4'>
                                    <img src='src/client/app/assets/images/kindergarten.JPG' className='img-responsive'/>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-center'>อัตราค่าเรียน</h2>
                                <hr className="colored-line m-green"/>
                            </div>
                            <div className='col-md-8 col-md-offset-2'>
                                <img src='src/client/app/assets/images/Course1.jpg' className='img-responsive'/>
                            </div>

                        </div>


                    </div>
                </Mobile>

            </div>

        );
    }
}

export default Courses;
