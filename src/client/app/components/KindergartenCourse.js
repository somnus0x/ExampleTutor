import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/course.css";
import MediaQuery from 'react-responsive'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;

class KindergartenCourse extends React.Component {
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

                        <div className='container qa'>
                            <h2 className='text-center'>คำถามที่พบบ่อย</h2>
                            <hr className="colored-line m-green"/>
                            <div className='row course-padding'>
                                <div className='col-md-2'></div>
                                <div className='col-md-8'>
                                    <strong className = 'qa-green'>Q : ทางสถาบัน CULH คืออะไร ?</strong>
                                    <h5><span className = 'qa-green'>A</span> : เราคือ<strong>สถาบันจัดหาครูสอนพิเศษส่วนตัว</strong>( ติวเตอร์ ) ให้กับบุคคลที่ต้องการเรียนพิเศษเพิ่มเติม แบบส่วนตัว ส่งตรงถึงที่บ้าน เพื่อติวเข้มทำเกรดที่โรงเรียน ดูแลการบ้าน ติวสอบเข้า เรียนภาษาที่สาม ติวสอบเรียนต่อ หรือเพิ่มทักษะทางด้านการเรียนต่างๆ อย่างมีคุณภาพมากที่สุด เรามีความตั้งใจจริง
                                    <strong>อยากจัดส่งครูที่ดีที่สุดสอนลูกของคุณ</strong> เพื่อบรรลุเป้าหมายของสถาบันที่ว่า</h5>
                                    <div className = 'text-center qa-green course-text-padding'>“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา”</div>
                                    <strong className = 'blue'>Q : ลูกอยู่อนุบาล ควรเรียนพิเศษส่วนตัวมั้ย ?</strong>
                                    <h5><span className = 'blue'>A</span> : หากคุณพ่อคุณแม่มีเวลามากพอที่สามารถดูแลการเรียนการสอนของลูกน้อยได้ ไม่จำเป็นต้องเรียนค่ะ แต่ถ้ามีไม่ค่อยมีเวลา ติดภาระหน้าที่อื่นๆ หรือ ต้องการบุคคลเชี่ยวชาญทางด้านการสอนมาช่วยดูแลการศึกษาของลูกน้อย แนะนำให้เรียนค่ะ อย่างไรก็ตาม ขึ้นอยู่กับทัศนคติของผู้ปกครองแต่ละคนด้วย</h5>
                                    <strong className = 'orange'>Q : ทำไมน้อง ๆ ระดับชั้นอนุบาล ถึงต้องเรียนพิเศษส่วนตัวกับทาง CU LEARNING HOME ?</strong>
                                    <h5><span className = 'orange'>A</span> : <strong>ทางสถาบันเราเข้าใจวัยอนุบาลได้เป็นอย่างดี</strong> ว่า เด็กวัยนี้จะเรียนรู้ผ่านกระบวนการเล่น เป็นส่วนใหญ่ ทางติวเตอร์ของเรา จะ<strong>เน้นสอนการฝึกทักษะทางด้านต่าง ๆ ฝึกสมาธิ</strong> เช่น การต่อจิกซอ การเล่นบล็อกไม้ <strong>ฝึกการอดทนรอคอย รู้จักเคารพกฎกติกา การแบ่งปันให้แก่ผู้อื่น ฝึกความคิดสร้างสรรค์ จินตนาการ</strong> โดยจะอ่านหนังสือให้น้องฟังในเรื่องที่ชอบ อ่านนิทานที่ให้ข้อคิดสอนใจ เป็นต้น และที่สำคัญที่สุด คือ<strong className = 'orange'>ปลูกฝังความชอบในการเรียนตั้งแต่เด็ก วางรากฐานการศึกษาขั้นพื้นฐานที่แข็งแรงให้กับน้อง ๆ</strong> เช่น ฝึกเชาว์ปัญญา การนับเลข ท่อง ก-ฮ หรือ ท่อง A-Z ได้ โดยมีการเรียนรู้ผ่านหลากหลายรูปแบบเช่น ร้องเพลงภาษาอังกฤษที่เป็นคำศัพท์ของร่างกาย คำศัพท์ที่ใช้ในชีวิตประจำวัน แข่งเกมส์ทายคำ นับผลไม้ เป็นต้น และสิ่งที่สำคัญที่สุด <span className = 'orange'>สถาบันเราอยากเป็นส่วนหนึ่งที่
                                    “ทำให้น้อง ๆ เป็นเด็กที่มีคุณภาพและประสบความสำเร็จในอนาคต”</span></h5>
                                    <strong className = 'deep-purple'>Q : ทำไมค่าเรียนอนุบาลถึงเริ่มต้นที่ราคา 180 บาท ต่อ ชั่วโมง ?</strong>
                                    <h5>A : อัตราค่าเรียนที่ทางเรากำหนด เป็นอัตราค่าเรียนที่ <strong>“รวมค่าเดินทาง และ เอกสารการเรียน”</strong> เรียบร้อยแล้ว และทางสถาบัน
                                    <strong className = 'deep-purple'>รับประกันการสอนที่ดีที่สุด</strong> หากไม่พอใจ ทางเรายินดี “คืนค่าเรียนเต็มจำนวน และ เปลี่ยนผู้สอนให้ ฟรี”</h5>

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

                        <div className='container qa'>
                            <h2 className='text-center'>คำถามที่พบบ่อย</h2>
                            <hr className="colored-line m-green"/>
                            <div className='row'>
                                <div className='col-md-2'></div>
                                <div className='col-md-8'>
                                    <strong className = 'deep-purple'>Q : ทางสถาบัน CULH คืออะไร ?</strong>
                                    <h5><span className = 'deep-purple'>A</span> : เราคือ<strong>สถาบันจัดหาครูสอนพิเศษส่วนตัว</strong>( ติวเตอร์ ) ให้กับบุคคลที่ต้องการเรียนพิเศษเพิ่มเติม แบบส่วนตัว ส่งตรงถึงที่บ้าน เพื่อติวเข้มทำเกรดที่โรงเรียน ดูแลการบ้าน ติวสอบเข้า เรียนภาษาที่สาม ติวสอบเรียนต่อ หรือเพิ่มทักษะทางด้านการเรียนต่างๆ อย่างมีคุณภาพมากที่สุด เรามีความตั้งใจจริง
                                    <strong>อยากจัดส่งครูที่ดีที่สุดสอนลูกของคุณ</strong> เพื่อบรรลุเป้าหมายของสถาบันที่ว่า</h5>
                                    <div className = 'text-center deep-purple course-text-padding'>“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา”</div>
                                    <strong className = 'deep-purple'>Q : ลูกอยู่อนุบาล ควรเรียนพิเศษส่วนตัวมั้ย ?</strong>
                                    <h5><span className = 'deep-purple'>A</span> : หากคุณพ่อคุณแม่มีเวลามากพอที่สามารถดูแลการเรียนการสอนของลูกน้อยได้ ไม่จำเป็นต้องเรียนค่ะ แต่ถ้ามีไม่ค่อยมีเวลา ติดภาระหน้าที่อื่นๆ หรือ ต้องการบุคคลเชี่ยวชาญทางด้านการสอนมาช่วยดูแลการศึกษาของลูกน้อย แนะนำให้เรียนค่ะ อย่างไรก็ตาม ขึ้นอยู่กับทัศนคติของผู้ปกครองแต่ละคนด้วย</h5>
                                    <strong className = 'deep-purple'>Q : ทำไมน้อง ๆ ระดับชั้นอนุบาล ถึงต้องเรียนพิเศษส่วนตัวกับทาง CU LEARNING HOME ?</strong>
                                    <h5><span className = 'deep-purple'>A</span> : <strong>ทางสถาบันเราเข้าใจวัยอนุบาลได้เป็นอย่างดี</strong> ว่า เด็กวัยนี้จะเรียนรู้ผ่านกระบวนการเล่น เป็นส่วนใหญ่ ทางติวเตอร์ของเรา จะ<strong>เน้นสอนการฝึกทักษะทางด้านต่าง ๆ ฝึกสมาธิ</strong> เช่น การต่อจิกซอ การเล่นบล็อกไม้ <strong>ฝึกการอดทนรอคอย รู้จักเคารพกฎกติกา การแบ่งปันให้แก่ผู้อื่น ฝึกความคิดสร้างสรรค์ จินตนาการ</strong> โดยจะอ่านหนังสือให้น้องฟังในเรื่องที่ชอบ อ่านนิทานที่ให้ข้อคิดสอนใจ เป็นต้น และที่สำคัญที่สุด คือ<strong className = 'deep-purple'>ปลูกฝังความชอบในการเรียนตั้งแต่เด็ก วางรากฐานการศึกษาขั้นพื้นฐานที่แข็งแรงให้กับน้อง ๆ</strong> เช่น ฝึกเชาว์ปัญญา การนับเลข ท่อง ก-ฮ หรือ ท่อง A-Z ได้ โดยมีการเรียนรู้ผ่านหลากหลายรูปแบบเช่น ร้องเพลงภาษาอังกฤษที่เป็นคำศัพท์ของร่างกาย คำศัพท์ที่ใช้ในชีวิตประจำวัน แข่งเกมส์ทายคำ นับผลไม้ เป็นต้น และสิ่งที่สำคัญที่สุด สถาบันเราอยากเป็นส่วนหนึ่งที่</h5>
                                    <div className = 'text-center deep-purple course-text-padding'>“ทำให้น้อง ๆ เป็นเด็กที่มีคุณภาพและประสบความสำเร็จในอนาคต”</div>
                                    <strong className = 'deep-purple'>Q : ทำไมค่าเรียนอนุบาลถึงเริ่มต้นที่ราคา 180 บาท ต่อ ชั่วโมง ?</strong>
                                    <h5>A : อัตราค่าเรียนที่ทางเรากำหนด เป็นอัตราค่าเรียนที่ <strong>“รวมค่าเดินทาง และ เอกสารการเรียน”</strong> เรียบร้อยแล้ว และทางสถาบัน
                                    <strong className = 'deep-purple'>รับประกันการสอนที่ดีที่สุด</strong> หากไม่พอใจ ทางเรายินดี “คืนค่าเรียนเต็มจำนวน และ เปลี่ยนผู้สอนให้ ฟรี”</h5>

                                </div>

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

                        <div className='container qa'>
                            <h2 className='text-center'>คำถามที่พบบ่อย</h2>
                            <hr className="colored-line m-green"/>
                            <div className='row'>
                                <div className='col-md-2'></div>
                                <div className='col-md-8'>
                                    <strong className = 'deep-purple'>Q : ทางสถาบัน CULH คืออะไร ?</strong>
                                    <h5><span className = 'deep-purple'>A</span> : เราคือ<strong>สถาบันจัดหาครูสอนพิเศษส่วนตัว</strong>( ติวเตอร์ ) ให้กับบุคคลที่ต้องการเรียนพิเศษเพิ่มเติม แบบส่วนตัว ส่งตรงถึงที่บ้าน เพื่อติวเข้มทำเกรดที่โรงเรียน ดูแลการบ้าน ติวสอบเข้า เรียนภาษาที่สาม ติวสอบเรียนต่อ หรือเพิ่มทักษะทางด้านการเรียนต่างๆ อย่างมีคุณภาพมากที่สุด เรามีความตั้งใจจริง
                                    <strong>อยากจัดส่งครูที่ดีที่สุดสอนลูกของคุณ</strong> เพื่อบรรลุเป้าหมายของสถาบันที่ว่า</h5>
                                    <div className = 'text-center deep-purple course-text-padding'>“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา”</div>
                                    <strong className = 'deep-purple'>Q : ลูกอยู่อนุบาล ควรเรียนพิเศษส่วนตัวมั้ย ?</strong>
                                    <h5><span className = 'deep-purple'>A</span> : หากคุณพ่อคุณแม่มีเวลามากพอที่สามารถดูแลการเรียนการสอนของลูกน้อยได้ ไม่จำเป็นต้องเรียนค่ะ แต่ถ้ามีไม่ค่อยมีเวลา ติดภาระหน้าที่อื่นๆ หรือ ต้องการบุคคลเชี่ยวชาญทางด้านการสอนมาช่วยดูแลการศึกษาของลูกน้อย แนะนำให้เรียนค่ะ อย่างไรก็ตาม ขึ้นอยู่กับทัศนคติของผู้ปกครองแต่ละคนด้วย</h5>
                                    <strong className = 'deep-purple'>Q : ทำไมน้อง ๆ ระดับชั้นอนุบาล ถึงต้องเรียนพิเศษส่วนตัวกับทาง CU LEARNING HOME ?</strong>
                                    <h5><span className = 'deep-purple'>A</span> : <strong>ทางสถาบันเราเข้าใจวัยอนุบาลได้เป็นอย่างดี</strong> ว่า เด็กวัยนี้จะเรียนรู้ผ่านกระบวนการเล่น เป็นส่วนใหญ่ ทางติวเตอร์ของเรา จะ<strong>เน้นสอนการฝึกทักษะทางด้านต่าง ๆ ฝึกสมาธิ</strong> เช่น การต่อจิกซอ การเล่นบล็อกไม้ <strong>ฝึกการอดทนรอคอย รู้จักเคารพกฎกติกา การแบ่งปันให้แก่ผู้อื่น ฝึกความคิดสร้างสรรค์ จินตนาการ</strong> โดยจะอ่านหนังสือให้น้องฟังในเรื่องที่ชอบ อ่านนิทานที่ให้ข้อคิดสอนใจ เป็นต้น และที่สำคัญที่สุด คือ<strong className = 'deep-purple'>ปลูกฝังความชอบในการเรียนตั้งแต่เด็ก วางรากฐานการศึกษาขั้นพื้นฐานที่แข็งแรงให้กับน้อง ๆ</strong> เช่น ฝึกเชาว์ปัญญา การนับเลข ท่อง ก-ฮ หรือ ท่อง A-Z ได้ โดยมีการเรียนรู้ผ่านหลากหลายรูปแบบเช่น ร้องเพลงภาษาอังกฤษที่เป็นคำศัพท์ของร่างกาย คำศัพท์ที่ใช้ในชีวิตประจำวัน แข่งเกมส์ทายคำ นับผลไม้ เป็นต้น และสิ่งที่สำคัญที่สุด สถาบันเราอยากเป็นส่วนหนึ่งที่</h5>
                                    <div className = 'text-center deep-purple course-text-padding'>“ทำให้น้อง ๆ เป็นเด็กที่มีคุณภาพและประสบความสำเร็จในอนาคต”</div>
                                    <strong className = 'deep-purple'>Q : ทำไมค่าเรียนอนุบาลถึงเริ่มต้นที่ราคา 180 บาท ต่อ ชั่วโมง ?</strong>
                                    <h5>A : อัตราค่าเรียนที่ทางเรากำหนด เป็นอัตราค่าเรียนที่ <strong>“รวมค่าเดินทาง และ เอกสารการเรียน”</strong> เรียบร้อยแล้ว และทางสถาบัน
                                    <strong className = 'deep-purple'>รับประกันการสอนที่ดีที่สุด</strong> หากไม่พอใจ ทางเรายินดี “คืนค่าเรียนเต็มจำนวน และ เปลี่ยนผู้สอนให้ ฟรี”</h5>

                                </div>

                            </div>
                        </div>
                    </div>
                </Mobile>

            </div>

        );
    }
}

export default KindergartenCourse;
