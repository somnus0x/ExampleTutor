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
                <div className="tutor-wrapper ">
                    <div className="container tutor-container">
                        <div className = 'tutor-content'>
                            <h2 className="text-center">CU Learning Home คือใคร ?</h2>
                            <hr className = 'colored-line m-red'/>
                            &emsp;&emsp;&emsp;&emsp;เราคือ<strong>สถาบันจัดหาครูสอนพิเศษส่วนตัว</strong>( ติวเตอร์ ) ให้กับบุคคลที่ต้องการเรียนพิเศษเพิ่มเติม แบบส่วนตัว ส่งตรงถึงที่บ้าน เพื่อติวเข้มทำเกรดที่โรงเรียน
                            ดูแลการบ้าน ติวสอบเข้า เรียนภาษาที่สาม ติวสอบเรียนต่อ หรือเพิ่มทักษะทางด้านการเรียนต่างๆ อย่างมีคุณภาพมากที่สุด เรามีความตั้งใจจริง
                            อยาก<strong>จัดส่งครูที่ดีที่สุดสอนลูกของคุณ</strong> เพื่อบรรลุเป้าหมายของสถาบันที่ว่า <br></br>
                            <div className = 'text-center red tutor-quote'><strong>“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา”</strong></div>
                        </div>
                        <div className = 'tutor-content tutor-padding'>

                            <h2 className="text-center">ทำไมต้องเรา เท่านั้น ?</h2>
                            <hr className = 'colored-line m-blue '/>
                            <div className = 'row'>
                                <div className = 'col-md-10 col-md-offset-2'>
                            <span className = 'glyphicon glyphicon-ok'></span>&emsp;ทางสถาบัน CULH มี “คุณภาพและความใส่ใจแตกต่างจากสถาบันอื่น ๆ “ อย่างแน่นอน <br></br>
                            <span className = 'glyphicon glyphicon-chevron-right'></span>&emsp;เรามั่นใจในคุณภาพของผู้สอนที่คัดเลือกไปให้ท่าน * ต้องมีประสบการณ์และมีใจรักในการสอน<br></br>
                            <strong className = 'red'>&emsp;&emsp;เราเป็นที่แรกและที่เดียว</strong>ที่กล้ารับประกันการสอน
                            <strong>หากไม่พอใจการสอน เราคืนเงินค่าสอนเต็มจำนวน***</strong>
                            <br></br>
                            <span className = 'glyphicon glyphicon-heart-empty'></span>&emsp;เราทำด้วยใจ มีความตั้งใจที่อยากให้ผู้เรียนทุกคนได้เรียนอย่าง “คุ้มค่าเงิน ได้เกรดดีขึ้น และสอบเข้าได้ “ <br></br>
                            &emsp;&emsp;โดยมีพี่ๆที่ทางเราส่งไปให้คำแนะนำ สอนและสนับสนุนให้น้องได้ไปถึงฝันอย่างเต็มที่ <br></br>
                            <span className = 'glyphicon glyphicon-ok'></span>&emsp;เราพร้อมจะเป็นส่วนหนึ่งในการพัฒนาผู้เรียนให้มีความมั่นใจในการเรียน ทางเรา <strong className = 'red'>“ยินดีให้คำปรึกษาทางด้านเรียน ฟรี!”</strong>
                            <br></br>&emsp;&emsp;โดยพี่ๆทีมีประสบการณ์และเชี่ยวชาญทางด้านการเรียนการสอนอย่างยาวนาน<br></br>
                            <span className = 'glyphicon glyphicon-ok'></span>&emsp;เราเข้าใจความต้องการของผู้ปกครองและผู้เรียนได้เป็นอย่างดี
                            <br></br>&emsp;&emsp;ผู้เรียนสามารถ <strong>>> เลือกวัน เวลา สถานที่ คุณสมบัติติวเตอร์ ที่ต้องการได้ *ต่างจังหวัดเรียนทางออนไลน์ได้</strong>
                            <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>>> เรียนได้ทุกวิชาที่ต้องการ ทุกระดับชั้น</strong>
                            <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>>> อัตราค่าเรียน เริ่มต้นเพียง 150 บาท / ชั่วโมง*</strong><br></br>
                            เราเชื่อว่า <span className = 'red'>"การเรียนที่ดีที่สุด คือ การเรียนแบบตัวต่อตัว โดยผู้สอนที่มีคุณภาพและตั้งใจจริง"</span>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Desktop>
            <Tablet>
                <div className="tutor-wrapper ">
                    <div className="container tutor-container">
                        <div className = 'tutor-content'>
                            <h2 className="text-center">CU Learning Home คือใคร ?</h2>
                            <hr className = 'colored-line m-red'/>
                            &emsp;&emsp;&emsp;&emsp;เราคือ<strong>สถาบันจัดหาครูสอนพิเศษส่วนตัว</strong>( ติวเตอร์ ) ให้กับบุคคลที่ต้องการเรียนพิเศษเพิ่มเติม แบบส่วนตัว ส่งตรงถึงที่บ้าน เพื่อติวเข้มทำเกรดที่โรงเรียน
                            ดูแลการบ้าน ติวสอบเข้า เรียนภาษาที่สาม ติวสอบเรียนต่อ หรือเพิ่มทักษะทางด้านการเรียนต่างๆ อย่างมีคุณภาพมากที่สุด เรามีความตั้งใจจริง
                            อยาก<strong>จัดส่งครูที่ดีที่สุดสอนลูกของคุณ</strong> เพื่อบรรลุเป้าหมายของสถาบันที่ว่า <br></br>
                            <div className = 'text-center red tutor-quote'><strong>“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา”</strong></div>
                        </div>
                        <div className = 'tutor-content tutor-padding'>

                            <h2 className="text-center">ทำไมต้องเรา เท่านั้น ?</h2>
                            <hr className = 'colored-line m-blue '/>
                            <div className = 'row'>
                                <div className = 'col-md-10 col-md-offset-2'>
                            <span className = 'glyphicon glyphicon-ok'></span>&emsp;ทางสถาบัน CULH มี “คุณภาพและความใส่ใจแตกต่างจากสถาบันอื่น ๆ “ อย่างแน่นอน <br></br>
                            <span className = 'glyphicon glyphicon-chevron-right'></span>&emsp;เรามั่นใจในคุณภาพของผู้สอนที่คัดเลือกไปให้ท่าน * ต้องมีประสบการณ์และมีใจรักในการสอน<br></br>
                            <strong className = 'red'>&emsp;&emsp;เราเป็นที่แรกและที่เดียว</strong>ที่กล้ารับประกันการสอน
                            <strong>หากไม่พอใจการสอน เราคืนเงินค่าสอนเต็มจำนวน***</strong>
                            <br></br>
                            <span className = 'glyphicon glyphicon-heart-empty'></span>&emsp;เราทำด้วยใจ มีความตั้งใจที่อยากให้ผู้เรียนทุกคนได้เรียนอย่าง “คุ้มค่าเงิน ได้เกรดดีขึ้น และสอบเข้าได้ “ <br></br>
                            &emsp;&emsp;โดยมีพี่ๆที่ทางเราส่งไปให้คำแนะนำ สอนและสนับสนุนให้น้องได้ไปถึงฝันอย่างเต็มที่ <br></br>
                            <span className = 'glyphicon glyphicon-ok'></span>&emsp;เราพร้อมจะเป็นส่วนหนึ่งในการพัฒนาผู้เรียนให้มีความมั่นใจในการเรียน ทางเรา <strong className = 'red'>“ยินดีให้คำปรึกษาทางด้านเรียน ฟรี!”</strong>
                            <br></br>&emsp;&emsp;โดยพี่ๆทีมีประสบการณ์และเชี่ยวชาญทางด้านการเรียนการสอนอย่างยาวนาน<br></br>
                            <span className = 'glyphicon glyphicon-ok'></span>&emsp;เราเข้าใจความต้องการของผู้ปกครองและผู้เรียนได้เป็นอย่างดี
                            <br></br>&emsp;&emsp;ผู้เรียนสามารถ <strong>>> เลือกวัน เวลา สถานที่ คุณสมบัติติวเตอร์ ที่ต้องการได้ *ต่างจังหวัดเรียนทางออนไลน์ได้</strong>
                            <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>>> เรียนได้ทุกวิชาที่ต้องการ ทุกระดับชั้น</strong>
                            <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>>> อัตราค่าเรียน เริ่มต้นเพียง 150 บาท / ชั่วโมง*</strong><br></br>
                            เราเชื่อว่า <span className = 'red'>"การเรียนที่ดีที่สุด คือ การเรียนแบบตัวต่อตัว โดยผู้สอนที่มีคุณภาพและตั้งใจจริง"</span>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Tablet>
            <Mobile>
                <div className="tutor-wrapper ">
                    <div className="container tutor-container">
                        <div className = 'tutor-content'>
                            <h2 className="text-center">CU Learning Home คือใคร ?</h2>
                            <hr className = 'colored-line m-red'/>
                            &emsp;&emsp;&emsp;&emsp;เราคือ<strong>สถาบันจัดหาครูสอนพิเศษส่วนตัว</strong>( ติวเตอร์ ) ให้กับบุคคลที่ต้องการเรียนพิเศษเพิ่มเติม แบบส่วนตัว ส่งตรงถึงที่บ้าน เพื่อติวเข้มทำเกรดที่โรงเรียน
                            ดูแลการบ้าน ติวสอบเข้า เรียนภาษาที่สาม ติวสอบเรียนต่อ หรือเพิ่มทักษะทางด้านการเรียนต่างๆ อย่างมีคุณภาพมากที่สุด เรามีความตั้งใจจริง
                            อยาก<strong>จัดส่งครูที่ดีที่สุดสอนลูกของคุณ</strong> เพื่อบรรลุเป้าหมายของสถาบันที่ว่า <br></br>
                            <div className = 'text-center red tutor-quote'><strong>“ความสำเร็จของลูกคุณ คือ จุดมุ่งหมายของเรา”</strong></div>
                        </div>
                        <div className = 'tutor-content tutor-padding'>

                            <h2 className="text-center">ทำไมต้องเรา เท่านั้น ?</h2>
                            <hr className = 'colored-line m-blue '/>
                            <div className = 'row'>
                                <div className = 'col-md-10 col-md-offset-2'>
                            <span className = 'glyphicon glyphicon-ok'></span>&emsp;ทางสถาบัน CULH มี “คุณภาพและความใส่ใจแตกต่างจากสถาบันอื่น ๆ “ อย่างแน่นอน <br></br>
                            <span className = 'glyphicon glyphicon-chevron-right'></span>&emsp;เรามั่นใจในคุณภาพของผู้สอนที่คัดเลือกไปให้ท่าน * ต้องมีประสบการณ์และมีใจรักในการสอน<br></br>
                            <strong className = 'red'>&emsp;&emsp;เราเป็นที่แรกและที่เดียว</strong>ที่กล้ารับประกันการสอน
                            <strong>หากไม่พอใจการสอน เราคืนเงินค่าสอนเต็มจำนวน***</strong>
                            <br></br>
                            <span className = 'glyphicon glyphicon-heart-empty'></span>&emsp;เราทำด้วยใจ มีความตั้งใจที่อยากให้ผู้เรียนทุกคนได้เรียนอย่าง “คุ้มค่าเงิน ได้เกรดดีขึ้น และสอบเข้าได้ “ <br></br>
                            &emsp;&emsp;โดยมีพี่ๆที่ทางเราส่งไปให้คำแนะนำ สอนและสนับสนุนให้น้องได้ไปถึงฝันอย่างเต็มที่ <br></br>
                            <span className = 'glyphicon glyphicon-ok'></span>&emsp;เราพร้อมจะเป็นส่วนหนึ่งในการพัฒนาผู้เรียนให้มีความมั่นใจในการเรียน ทางเรา <strong className = 'red'>“ยินดีให้คำปรึกษาทางด้านเรียน ฟรี!”</strong>
                            <br></br>&emsp;&emsp;โดยพี่ๆทีมีประสบการณ์และเชี่ยวชาญทางด้านการเรียนการสอนอย่างยาวนาน<br></br>
                            <span className = 'glyphicon glyphicon-ok'></span>&emsp;เราเข้าใจความต้องการของผู้ปกครองและผู้เรียนได้เป็นอย่างดี
                            <br></br>&emsp;&emsp;ผู้เรียนสามารถ <strong>>> เลือกวัน เวลา สถานที่ คุณสมบัติติวเตอร์ ที่ต้องการได้ *ต่างจังหวัดเรียนทางออนไลน์ได้</strong>
                            <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>>> เรียนได้ทุกวิชาที่ต้องการ ทุกระดับชั้น</strong>
                            <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<strong>>> อัตราค่าเรียน เริ่มต้นเพียง 150 บาท / ชั่วโมง*</strong><br></br>
                            เราเชื่อว่า <span className = 'red'>"การเรียนที่ดีที่สุด คือ การเรียนแบบตัวต่อตัว โดยผู้สอนที่มีคุณภาพและตั้งใจจริง"</span>
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

export default TutorInfoSection;
