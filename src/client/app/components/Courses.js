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
                        <div>
                            <h2 className='text-center'>อัตราค่าเรียน</h2>
                            <hr className="colored-line m-green"/>
                        </div>
                        <div className="table-title"></div>
                        <table className="table-fill">
                            <thead>
                                <tr>
                                    <th className="text-left">อัตราค่าเรียน</th>
                                    <th className="text-left">ค่าเรียนต่อคน</th>
                                    <th className="text-left">รายละเอียด</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left">ปูพื้นฐาน</td>
                                    <td className="text-left">200 บาท/ชม.</td>
                                    <td className="text-left">เน้นเพิ่มทักษะทางด้านต่างๆของน้อง ฝึก</td>
                                </tr>
                                <tr>
                                    <td className="text-left">สอบเข้าอนุบาล</td>
                                    <td className="text-left">200 บาท/ชม.</td>
                                    <td className="text-left"></td>
                                </tr>
                                <tr>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรปกติ)</td>
                                    <td className="text-left">200 บาท/ชม.</td>
                                    <td className="text-left"></td>
                                </tr>
                                <tr>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรอินเตอร์)</td>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรปกติ)</td>
                                    <td className="text-left"></td>
                                </tr>
                                <tr>
                                    <td className="text-left">สนทนาภาษาอังกฤษ/จีน</td>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรปกติ)</td>
                                    <td className="text-left"></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6 notice'>

                                *หมายเหตุ<br/>
                                -ค่าเรียนทั้งหมดรวมค่าเดินทางและเอกสารการสอนแล้ว<br/>
                                -ไม่แนะนำให้เรียนมากกว่า 1 คน เพราะน้องอนุบาลจะเสียสมาธิได้ง่าย เมื่อมีเพื่อนๆเข้ามาเรียนด้วย<br/>
                            </div>
                            <div className='col-md-3'></div>
                        </div>
                    </div>

                    <div className='container qa'>
                        <h2 className='text-center'>FAQ</h2>
                        <hr className="colored-line m-green"/>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <h4>Q : ลูกเรียนอยู่อนุบาลจำเป็นต้องเรียนพิเศษมั้ย ?</h4>
                                <h5>A : แนะนำให้เรียนค่ะ</h5>
                                <h4>Q : ทำไมต้องเรียนพิเศษอนุบาลกับทางเรา ?</h4>
                                <h5>A : ทางสถาบันเรา มีติวเตอร์ที่มี เทคนิคการสอนอนุบาล</h5>
                                <h4>Q : อนุบาลเรียนอะไรบ้าง ?</h4>
                                <h5>A : แผนการเรียนอนุบาล
                                </h5>
                                <h5>หลักสูตรอนุบาล 1-3</h5>
                                <h5>การเรียนการสอนอนุบาล 1</h5>
                                <h4>Q : ควรเตรียมลูกก่อนเข้าอนุบาลอย่างไร ?</h4>
                                <h5>A :</h5>
                                <h4>Q : อนุบาลเรียนที่ไหนดี?</h4>
                                <h5>A :</h5>
                                <h4>Q : เรียนพิเศษตอนเย็นที่โรงเรียนต่างกับเรียนส่วนตัวตอนเย็นที่บ้านอย่างไร ?</h4>
                                <h5>A :
                                </h5>
                                <h4>Q : เรียนอนุบาลที่ไหนดี ?</h4>
                                <h5>A : บอกชื่อโรงเรียนอนุบาลชื่อดัง.....</h5>
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div className='mobile-course-wrapper'>
                    <div className='container course-container'>
                        <div>
                            <h2 className='text-center'>อัตราค่าเรียน</h2>
                            <hr className="colored-line m-green"/>
                        </div>
                        <div className="table-title"></div>
                        <table className="table-fill">
                            <thead>
                                <tr>
                                    <th className="text-left">อัตราค่าเรียน</th>
                                    <th className="text-left">ค่าเรียนต่อคน</th>
                                    <th className="text-left">รายละเอียด</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left">ปูพื้นฐาน</td>
                                    <td className="text-left">200 บาท/ชม.</td>
                                    <td className="text-left">เน้นเพิ่มทักษะทางด้านต่างๆของน้อง ฝึก</td>
                                </tr>
                                <tr>
                                    <td className="text-left">สอบเข้าอนุบาล</td>
                                    <td className="text-left">200 บาท/ชม.</td>
                                    <td className="text-left"></td>
                                </tr>
                                <tr>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรปกติ)</td>
                                    <td className="text-left">200 บาท/ชม.</td>
                                    <td className="text-left"></td>
                                </tr>
                                <tr>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรอินเตอร์)</td>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรปกติ)</td>
                                    <td className="text-left"></td>
                                </tr>
                                <tr>
                                    <td className="text-left">สนทนาภาษาอังกฤษ/จีน</td>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรปกติ)</td>
                                    <td className="text-left"></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6 notice'>

                                *หมายเหตุ<br/>
                                -ค่าเรียนทั้งหมดรวมค่าเดินทางและเอกสารการสอนแล้ว<br/>
                                -ไม่แนะนำให้เรียนมากกว่า 1 คน เพราะน้องอนุบาลจะเสียสมาธิได้ง่าย เมื่อมีเพื่อนๆเข้ามาเรียนด้วย<br/>
                            </div>
                            <div className='col-md-3'></div>
                        </div>
                    </div>

                    <div className='container qa'>
                        <h2 className='text-center'>FAQ</h2>
                        <hr className="colored-line m-green"/>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <h4>Q : ลูกเรียนอยู่อนุบาลจำเป็นต้องเรียนพิเศษมั้ย ?</h4>
                                <h5>A : แนะนำให้เรียนค่ะ</h5>
                                <h4>Q : ทำไมต้องเรียนพิเศษอนุบาลกับทางเรา ?</h4>
                                <h5>A : ทางสถาบันเรา มีติวเตอร์ที่มี เทคนิคการสอนอนุบาล</h5>
                                <h4>Q : อนุบาลเรียนอะไรบ้าง ?</h4>
                                <h5>A : แผนการเรียนอนุบาล
                                </h5>
                                <h5>หลักสูตรอนุบาล 1-3</h5>
                                <h5>การเรียนการสอนอนุบาล 1</h5>
                                <h4>Q : ควรเตรียมลูกก่อนเข้าอนุบาลอย่างไร ?</h4>
                                <h5>A :</h5>
                                <h4>Q : อนุบาลเรียนที่ไหนดี?</h4>
                                <h5>A :</h5>
                                <h4>Q : เรียนพิเศษตอนเย็นที่โรงเรียนต่างกับเรียนส่วนตัวตอนเย็นที่บ้านอย่างไร ?</h4>
                                <h5>A :
                                </h5>
                                <h4>Q : เรียนอนุบาลที่ไหนดี ?</h4>
                                <h5>A : บอกชื่อโรงเรียนอนุบาลชื่อดัง.....</h5>
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div className='mobile-course-wrapper'>
                    <div className='container course-container'>
                        <div>
                            <h2 className='text-center'>อัตราค่าเรียน</h2>
                            <hr className="colored-line m-green"/>
                        </div>
                        <div className="table-title"></div>
                        <table className="table-fill">
                            <thead>
                                <tr>
                                    <th className="text-left">อัตราค่าเรียน</th>
                                    <th className="text-left">ค่าเรียนต่อคน</th>
                                    <th className="text-left">รายละเอียด</th>
                                </tr>
                            </thead>
                            <tbody className="table-hover">
                                <tr>
                                    <td className="text-left">ปูพื้นฐาน</td>
                                    <td className="text-left">200 บาท/ชม.</td>
                                    <td className="text-left">เน้นเพิ่มทักษะทางด้านต่างๆของน้อง ฝึก</td>
                                </tr>
                                <tr>
                                    <td className="text-left">สอบเข้าอนุบาล</td>
                                    <td className="text-left">200 บาท/ชม.</td>
                                    <td className="text-left"></td>
                                </tr>
                                <tr>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรปกติ)</td>
                                    <td className="text-left">200 บาท/ชม.</td>
                                    <td className="text-left"></td>
                                </tr>
                                <tr>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรอินเตอร์)</td>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรปกติ)</td>
                                    <td className="text-left"></td>
                                </tr>
                                <tr>
                                    <td className="text-left">สนทนาภาษาอังกฤษ/จีน</td>
                                    <td className="text-left">สอบเข้า ป.1 (หลักสูตรปกติ)</td>
                                    <td className="text-left"></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row">
                            <div className='col-md-3'></div>
                            <div className='col-md-6 notice'>

                                *หมายเหตุ<br/>
                                -ค่าเรียนทั้งหมดรวมค่าเดินทางและเอกสารการสอนแล้ว<br/>
                                -ไม่แนะนำให้เรียนมากกว่า 1 คน เพราะน้องอนุบาลจะเสียสมาธิได้ง่าย เมื่อมีเพื่อนๆเข้ามาเรียนด้วย<br/>
                            </div>
                            <div className='col-md-3'></div>
                        </div>
                    </div>

                    <div className='container qa'>
                        <h2 className='text-center'>FAQ</h2>
                        <hr className="colored-line m-green"/>
                        <div className='row'>
                            <div className='col-md-2'></div>
                            <div className='col-md-8'>
                                <h4>Q : ลูกเรียนอยู่อนุบาลจำเป็นต้องเรียนพิเศษมั้ย ?</h4>
                                <h5>A : แนะนำให้เรียนค่ะ</h5>
                                <h4>Q : ทำไมต้องเรียนพิเศษอนุบาลกับทางเรา ?</h4>
                                <h5>A : ทางสถาบันเรา มีติวเตอร์ที่มี เทคนิคการสอนอนุบาล</h5>
                                <h4>Q : อนุบาลเรียนอะไรบ้าง ?</h4>
                                <h5>A : แผนการเรียนอนุบาล
                                </h5>
                                <h5>หลักสูตรอนุบาล 1-3</h5>
                                <h5>การเรียนการสอนอนุบาล 1</h5>
                                <h4>Q : ควรเตรียมลูกก่อนเข้าอนุบาลอย่างไร ?</h4>
                                <h5>A :</h5>
                                <h4>Q : อนุบาลเรียนที่ไหนดี?</h4>
                                <h5>A :</h5>
                                <h4>Q : เรียนพิเศษตอนเย็นที่โรงเรียนต่างกับเรียนส่วนตัวตอนเย็นที่บ้านอย่างไร ?</h4>
                                <h5>A :
                                </h5>
                                <h4>Q : เรียนอนุบาลที่ไหนดี ?</h4>
                                <h5>A : บอกชื่อโรงเรียนอนุบาลชื่อดัง.....</h5>
                            </div>
                            <div className='col-md-2'></div>
                        </div>
                    </div>
                </div>
            </Mobile>

            </div>

        );
    }
}

export default Courses;
