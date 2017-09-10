import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/course.css";
import MediaQuery from 'react-responsive'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;

class PrimarySchool extends React.Component {
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
                    <div className='desktop-navbar-offset'></div>
                </Tablet>
                <Desktop>
                    <div className='course-wrapper'>
                        <div className='container course-container'>
                            <div className='row'>
                                <div className='col-md-4 col-md-offset-4'>
                                    <img src='src/client/app/assets/images/primaryschool.jpg' className='img-responsive'/>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-center'>อัตราค่าเรียน</h2>
                                <hr className="colored-line m-green"/>
                            </div>
                            <div className='col-md-8 col-md-offset-2'>
                                <img src='src/client/app/assets/images/Course1.jpg' className='img-responsive'/>
                            </div>

                            <div className='col-md-8 col-md-offset-2'>
                                <img src='src/client/app/assets/images/Course-3.jpg' className='img-responsive course-padding'/>
                            </div>

                        </div>

                        <div className='container qa'>
                            <h2 className='text-center'>FAQ</h2>
                            <hr className="colored-line m-green"/>
                            <div className='row'>
                                <div className='col-md-2'></div>
                                <div className='col-md-8'>
                                    <h4>Q : ทางสถาบัน CULH คืออะไร ?</h4>
                                    <h5>A : เราคือ<strong>สถาบันจัดหาครูสอนพิเศษส่วนตัว( ติวเตอร์ )</strong> ให้กับบุคคลที่ต้องการเรียนพิเศษเพิ่มเติม แบบส่วนตัว ส่งตรงถึงที่บ้าน เพื่อติวเข้มทำเกรดที่โรงเรียน ดูแลการบ้าน ติวสอบเข้า เรียนภาษาที่สาม ติวสอบเรียนต่อ หรือเพิ่มทักษะทางด้านการเรียนต่างๆ อย่างมีคุณภาพมากที่สุด เรามีความตั้งใจจริง อยาก<strong>จัดส่งครูที่ดีที่สุดสอนลูกของคุณ</strong> เพื่อบรรลุเป้าหมายของสถาบันที่ว่า</h5>
                                    <div className = 'text-center qa-green course-text-padding'>“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา”</div>
                                    <strong className = 'blue'>Q : ลูกอยู่ชั้นประถมต้น ควรเรียนพิเศษส่วนตัวมั้ย ?</strong>
                                    <h5>A : ทางสถาบัน CULH แนะนำให้เรียนค่ะ เพื่อปลูกฝังให้น้อง ๆ รักการอ่าน การเขียน การเรียนตั้งแต่ยังเล็ก หากน้อง ๆ มีพื้นฐานทางการเรียนที่ดีตั้งแต่ตอนนี้ ย่อมนำไปสู่รากฐานการเรียนรู้ที่มั่นคงในอนาคตได้ แต่อย่างไรก็ตาม ขึ้นอยู่กับวัตถุประสงค์ของผู้ปกครองแต่ละท่านด้วยค่ะ</h5>
                                    <strong className = 'teal'>Q : ทำไมน้อง ๆ ระดับชั้นประถมศึกษา ถึงต้องเรียนพิเศษส่วนตัวกับทาง CU LEARNING HOME ?</strong>
                                    <h5>A : ทาง CULH ใส่ใจและเข้าใจน้อง ๆนักเรียนในทุกช่วงวัยได้เป็นอย่างดี โดยเฉพาะน้อง ๆประถมศึกษา ทางเรายินดีช่วยคุณพ่อคุณแม่ในการดูแลการเรียนของน้องๆแบบส่วนตัว ด้วยการ<strong>จัดส่งติวเตอร์เชี่ยวชาญเฉพาะด้าน มีคุณภาพ</strong> และที่สำคัญ <br></br><strong>มีใจรักและเต็มที่ในการสอน</strong> หัวใจในการเรียนพิเศษส่วนตัวในระดับชั้นนี้คือ <strong className = 'teal'>เน้นเทคนิคความเข้าใจพื้นฐานของ</strong>วิชาทั้งหมด
                                     <strong className = 'teal'>ดูแลการบ้าน</strong>อย่างใกล้ชิด เรียนรู้การ<strong className = 'teal'>ทำแบบฝึกหัด</strong> จนไปถึง<strong className = 'teal'>เทคนิคในการทำข้อสอบ</strong> เพื่อเพิ่มเกรดในห้อง และสนามสอบแข่งขันเข้าเรียนต่อในระดับชั้นมัธยมศึกษาต่อไป </h5>
                                    <div className = 'text-center red course-text-padding'>“เราเชื่อว่า น้อง ๆ จะเก่งได้ ต้องอยู่ที่ความตั้งใจของตัวเองและความพยายาม ตั้งใจสอนของคุณครู จะนำไปสู่ความสำเร็จ ”</div>
                                    <strong className = 'deep-purple'>Q : ทำไมค่าเรียนประถมต้นถึงเริ่มต้นที่ราคา 200 บาท ต่อ ชั่วโมง ?</strong>
                                    <h5>A : อัตราค่าเรียนที่ทางเรากำหนด เป็นอัตราค่าเรียนที่ <strong>“รวมค่าเดินทาง และ เอกสารการเรียน”</strong> เรียบร้อยแล้ว และทางสถาบัน<br></br> <strong className = 'deep-purple'>รับประกันการสอนที่ดีที่สุด</strong> หากไม่พอใจ ทางเรายินดี “คืนค่าเรียนเต็มจำนวน และ เปลี่ยนผู้สอนให้ ฟรี”</h5>

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
                                    <img src='src/client/app/assets/images/primaryschool.jpg' className='img-responsive'/>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-center'>อัตราค่าเรียน</h2>
                                <hr className="colored-line m-green"/>
                            </div>
                            <div className='col-md-8 col-md-offset-2'>
                                <img src='src/client/app/assets/images/Course1.jpg' className='img-responsive'/>
                            </div>

                            <div className='col-md-8 col-md-offset-2'>
                                <img src='src/client/app/assets/images/Course-3.jpg' className='img-responsive course-padding'/>
                            </div>

                        </div>

                        <div className='container qa'>
                            <h2 className='text-center'>FAQ</h2>
                            <hr className="colored-line m-green"/>
                            <div className='row'>
                                <div className='col-md-2'></div>
                                <div className='col-md-8'>
                                    <h4>Q : ทางสถาบัน CULH คืออะไร ?</h4>
                                    <h5>A : เราคือ<strong>สถาบันจัดหาครูสอนพิเศษส่วนตัว( ติวเตอร์ )</strong> ให้กับบุคคลที่ต้องการเรียนพิเศษเพิ่มเติม แบบส่วนตัว ส่งตรงถึงที่บ้าน เพื่อติวเข้มทำเกรดที่โรงเรียน ดูแลการบ้าน ติวสอบเข้า เรียนภาษาที่สาม ติวสอบเรียนต่อ หรือเพิ่มทักษะทางด้านการเรียนต่างๆ อย่างมีคุณภาพมากที่สุด เรามีความตั้งใจจริง อยาก<strong>จัดส่งครูที่ดีที่สุดสอนลูกของคุณ</strong> เพื่อบรรลุเป้าหมายของสถาบันที่ว่า</h5>
                                    <div className = 'text-center qa-green course-text-padding'>“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา”</div>
                                    <strong className = 'blue'>Q : ลูกอยู่ชั้นประถมต้น ควรเรียนพิเศษส่วนตัวมั้ย ?</strong>
                                    <h5>A : ทางสถาบัน CULH แนะนำให้เรียนค่ะ เพื่อปลูกฝังให้น้อง ๆ รักการอ่าน การเขียน การเรียนตั้งแต่ยังเล็ก หากน้อง ๆ มีพื้นฐานทางการเรียนที่ดีตั้งแต่ตอนนี้ ย่อมนำไปสู่รากฐานการเรียนรู้ที่มั่นคงในอนาคตได้ แต่อย่างไรก็ตาม ขึ้นอยู่กับวัตถุประสงค์ของผู้ปกครองแต่ละท่านด้วยค่ะ</h5>
                                    <strong className = 'teal'>Q : ทำไมน้อง ๆ ระดับชั้นประถมศึกษา ถึงต้องเรียนพิเศษส่วนตัวกับทาง CU LEARNING HOME ?</strong>
                                    <h5>A : ทาง CULH ใส่ใจและเข้าใจน้อง ๆนักเรียนในทุกช่วงวัยได้เป็นอย่างดี โดยเฉพาะน้อง ๆประถมศึกษา ทางเรายินดีช่วยคุณพ่อคุณแม่ในการดูแลการเรียนของน้องๆแบบส่วนตัว ด้วยการ<strong>จัดส่งติวเตอร์เชี่ยวชาญเฉพาะด้าน มีคุณภาพ</strong> และที่สำคัญ <br></br><strong>มีใจรักและเต็มที่ในการสอน</strong> หัวใจในการเรียนพิเศษส่วนตัวในระดับชั้นนี้คือ <strong className = 'teal'>เน้นเทคนิคความเข้าใจพื้นฐานของ</strong>วิชาทั้งหมด
                                     <strong className = 'teal'>ดูแลการบ้าน</strong>อย่างใกล้ชิด เรียนรู้การ<strong className = 'teal'>ทำแบบฝึกหัด</strong> จนไปถึง<strong className = 'teal'>เทคนิคในการทำข้อสอบ</strong> เพื่อเพิ่มเกรดในห้อง และสนามสอบแข่งขันเข้าเรียนต่อในระดับชั้นมัธยมศึกษาต่อไป </h5>
                                    <div className = 'text-center red course-text-padding'>“เราเชื่อว่า น้อง ๆ จะเก่งได้ ต้องอยู่ที่ความตั้งใจของตัวเองและความพยายาม ตั้งใจสอนของคุณครู จะนำไปสู่ความสำเร็จ ”</div>
                                    <strong className = 'deep-purple'>Q : ทำไมค่าเรียนประถมต้นถึงเริ่มต้นที่ราคา 200 บาท ต่อ ชั่วโมง ?</strong>
                                    <h5>A : อัตราค่าเรียนที่ทางเรากำหนด เป็นอัตราค่าเรียนที่ <strong>“รวมค่าเดินทาง และ เอกสารการเรียน”</strong> เรียบร้อยแล้ว และทางสถาบัน<br></br> <strong className = 'deep-purple'>รับประกันการสอนที่ดีที่สุด</strong> หากไม่พอใจ ทางเรายินดี “คืนค่าเรียนเต็มจำนวน และ เปลี่ยนผู้สอนให้ ฟรี”</h5>

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
                                    <img src='src/client/app/assets/images/primaryschool.jpg' className='img-responsive'/>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-center'>อัตราค่าเรียน</h2>
                                <hr className="colored-line m-green"/>
                            </div>
                            <div className='col-md-8 col-md-offset-2'>
                                <img src='src/client/app/assets/images/Course1.jpg' className='img-responsive'/>
                            </div>

                            <div className='col-md-8 col-md-offset-2'>
                                <img src='src/client/app/assets/images/Course-3.jpg' className='img-responsive course-padding'/>
                            </div>

                        </div>

                        <div className='container qa'>
                            <h2 className='text-center'>คำถามที่พบบ่อย</h2>
                            <hr className="colored-line m-green"/>
                            <div className='row'>
                                <div className='col-md-2'></div>
                                <div className='col-md-8'>
                                    <h4>Q : ทางสถาบัน CULH คืออะไร ?</h4>
                                    <h5>A : เราคือ<strong>สถาบันจัดหาครูสอนพิเศษส่วนตัว( ติวเตอร์ )</strong> ให้กับบุคคลที่ต้องการเรียนพิเศษเพิ่มเติม แบบส่วนตัว ส่งตรงถึงที่บ้าน เพื่อติวเข้มทำเกรดที่โรงเรียน ดูแลการบ้าน ติวสอบเข้า เรียนภาษาที่สาม ติวสอบเรียนต่อ หรือเพิ่มทักษะทางด้านการเรียนต่างๆ อย่างมีคุณภาพมากที่สุด เรามีความตั้งใจจริง อยาก<strong>จัดส่งครูที่ดีที่สุดสอนลูกของคุณ</strong> เพื่อบรรลุเป้าหมายของสถาบันที่ว่า</h5>
                                    <div className = 'text-center qa-green course-text-padding'>“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา”</div>
                                    <strong className = 'blue'>Q : ลูกอยู่ชั้นประถมต้น ควรเรียนพิเศษส่วนตัวมั้ย ?</strong>
                                    <h5>A : ทางสถาบัน CULH แนะนำให้เรียนค่ะ เพื่อปลูกฝังให้น้อง ๆ รักการอ่าน การเขียน การเรียนตั้งแต่ยังเล็ก หากน้อง ๆ มีพื้นฐานทางการเรียนที่ดีตั้งแต่ตอนนี้ ย่อมนำไปสู่รากฐานการเรียนรู้ที่มั่นคงในอนาคตได้ แต่อย่างไรก็ตาม ขึ้นอยู่กับวัตถุประสงค์ของผู้ปกครองแต่ละท่านด้วยค่ะ</h5>
                                    <strong className = 'teal'>Q : ทำไมน้อง ๆ ระดับชั้นประถมศึกษา ถึงต้องเรียนพิเศษส่วนตัวกับทาง CU LEARNING HOME ?</strong>
                                    <h5>A : ทาง CULH ใส่ใจและเข้าใจน้อง ๆนักเรียนในทุกช่วงวัยได้เป็นอย่างดี โดยเฉพาะน้อง ๆประถมศึกษา ทางเรายินดีช่วยคุณพ่อคุณแม่ในการดูแลการเรียนของน้องๆแบบส่วนตัว ด้วยการ<strong>จัดส่งติวเตอร์เชี่ยวชาญเฉพาะด้าน มีคุณภาพ</strong> และที่สำคัญ <br></br><strong>มีใจรักและเต็มที่ในการสอน</strong> หัวใจในการเรียนพิเศษส่วนตัวในระดับชั้นนี้คือ <strong className = 'teal'>เน้นเทคนิคความเข้าใจพื้นฐานของ</strong>วิชาทั้งหมด
                                     <strong className = 'teal'>ดูแลการบ้าน</strong>อย่างใกล้ชิด เรียนรู้การ<strong className = 'teal'>ทำแบบฝึกหัด</strong> จนไปถึง<strong className = 'teal'>เทคนิคในการทำข้อสอบ</strong> เพื่อเพิ่มเกรดในห้อง และสนามสอบแข่งขันเข้าเรียนต่อในระดับชั้นมัธยมศึกษาต่อไป </h5>
                                    <div className = 'text-center red course-text-padding'>“เราเชื่อว่า น้อง ๆ จะเก่งได้ ต้องอยู่ที่ความตั้งใจของตัวเองและความพยายาม ตั้งใจสอนของคุณครู จะนำไปสู่ความสำเร็จ ”</div>
                                    <strong className = 'deep-purple'>Q : ทำไมค่าเรียนประถมต้นถึงเริ่มต้นที่ราคา 200 บาท ต่อ ชั่วโมง ?</strong>
                                    <h5>A : อัตราค่าเรียนที่ทางเรากำหนด เป็นอัตราค่าเรียนที่ <strong>“รวมค่าเดินทาง และ เอกสารการเรียน”</strong> เรียบร้อยแล้ว และทางสถาบัน<br></br> <strong className = 'deep-purple'>รับประกันการสอนที่ดีที่สุด</strong> หากไม่พอใจ ทางเรายินดี “คืนค่าเรียนเต็มจำนวน และ เปลี่ยนผู้สอนให้ ฟรี”</h5>

                                </div>

                            </div>
                        </div>
                    </div>
                </Mobile>

            </div>

        );
    }
}

export default PrimarySchool;
