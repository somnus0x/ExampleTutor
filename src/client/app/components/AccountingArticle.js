import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/article.css";
import MediaQuery from 'react-responsive'
const Desktop = ({children}) => <MediaQuery minWidth={1280} children={children}/>;
const Tablet = ({children}) => <MediaQuery minWidth={768} maxWidth={1279} children={children}/>;
const Mobile = ({children}) => <MediaQuery maxWidth={768} children={children}/>;
class AccountingArticle extends React.Component {
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
                    <div className="container">
                        <Content />
                    </div>
            </Desktop>
            <Tablet>
                <div className="container mobile-article-padding">
                    <Content />
                </div>
            </Tablet>
            <Mobile>
                <div className="container mobile-article-padding">
                    <Content />
                </div>
            </Mobile>
        </div>


        );
    }
}

class Content extends React.Component{
    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-center">How to ติดชัว+เจาะลึกคณะบัญชีจุฬา
                        </h2>
                        <hr className = 'colored-line m-purple'/>
                    </div>
                </div>
                <div className="row article-row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8 qa">
                        <div className='row'>
                            <div className='col-md-8 col-md-offset-2'>
                                <img src={'src/client/app/assets/images/accountingCover.png'} className='img-responsive article-image'/>
                            </div>
                        </div>
                        <div className = 'row'>
                            <h5>
                            สวัสดีค่าน้อง ๆ พี่ๆ CU LEARNING HOME จะมาแนะนำเทคนิคการสอบเข้ามหาวิทยาลัยที่น้อง ๆใฝ่ฝันเอาไว้ โดยวันนี้ พี่พลอยขอนำเสนอ “How To ติดชัว+เจาะลึกคณะบัญชีจุฬา” ให้ฟังกันค่ะ โดยมีพี่ตังเม นิสิตสาวบัญชีจุฬา ผู้สอบติดตัวจริง มาให้คำแนะนำและเคล็ดลับดี ๆ ที่จะทำให้น้อง ๆ สอบติดบัญชีจุฬาผ่านฉลุย สามารถนำไปใช้ในการสอบเข้าคณะอื่นได้ด้วย อีกทั้งยังมาเล่าประสบการณ์จริงว่า
                            คณะบัญชี จุฬาฯ  เรียนอะไรบ้าง รับรองว่า หาอ่านจากที่ไหนไม่ได้ ต้องที่ CULH ที่เดียวเท่านั้นค่ะ!!! <br></br>
                            </h5>
                        </div>
                        <div className = 'row'>
                            <h5>
                            <img src = 'src/client/app/assets/images/accounting1.jpg' className = 'img-responsive accounting-image'></img>
                            <br></br>สวัสดีค่ะ แนะนำตัวก่อนนะคะ
                            ชื่อ อรจิรา มงคลดาว ชื่อเล่น ตังเม ค่า <br></br><br></br>
                            <strong className = 'blue'>การศึกษา</strong>
                            <br></br>
                            มัธยมศึกษาตอนต้น - โรงเรียนสตรีวิทยา<br></br>
                            มัธยมศึกษาตอนปลาย -โรงเรียนเตรียมอุดมศึกษา<br></br>
                            ปริญญาตรี  -  คณะพาณิชยศาสตร์และการบัญชี จุฬาลงกรณ์มหาวิทยาลัย ภาควิชาการตลาด
                        </h5>
                        </div>
                        <div className = 'row paragraph'>
                        <h5>
                        ต้องบอกจากใจเลยว่า ดูเหมือนพี่จะเป็นเด็กเก่งในสายตาคนอื่น แต่พี่กลับรู้ตัวเองว่าไม่ใช่ แต่เกิดจากปัจจัยหลายๆอย่างค่ะ
                        วันนี้ พี่ตังเมขอเปิดเผย <strong>“เคล็บลับในการเรียน”</strong> รวมทั้งเล่า <strong>“คณะบัญชีจุฬา”</strong> ให้น้อง ๆ ฟังกันค่ะ
                        </h5>
                        </div>
                        <br></br><br></br>
                        <div className = 'row'>
                            <strong className = 'blue'>รู้เขา รู้เรา - รบร้อยครั้งชนะร้อยครั้ง</strong>
                        </div>
                        <div className = 'row'>
                                <img src={'src/client/app/assets/images/accounting2.jpg'} className='img-responsive left-align'/>
                                <div className = 'accounting-content'>
                                <h5>
                                จากตอนประถม พี่มาจากโรงเรียนต่างจังหวัดเรียกว่า บ้านนอกเลยล่ะ  นี่พูดเลย วันๆไม่สนใจอะไร โดดยาง กลับบ้าน นอน  แต่ก็มีจุดเปลี่ยน
                                คือครอบครัวของพี่อยากให้เข้ามาเรียนในกรุงเทพ เลยคิดในหัวว่า เออ ลองดูก็ได้วะ เด็กกรุงเทพมันจะเก่งขนาดไหน สรุป เก่งจริง ๆ
                                แบบตอนแรกนึกว่าสอบไม่ติดซะแล้ว ก่อนสอบพี่ก็ทำการ <strong>ศึกษาข้อมูล คุณสมบัติที่จะรับ วิชาที่ต้องสอบ ทุกอย่างเลย และพยายามใช้เวลาให้ได้ประโยชน์มากที่สุด</strong>
                                นั่นคือเรียนพิเศษส่วนตัวนั่นเอง เพราะเป็นการเรียนที่ได้ความรู้มากที่สุด เข้าใจเนื้อหาได้อย่างรวดเร็วในระยะเวลาที่จำกัด หากพี่สงสัยโจทย์อะไร พี่ก็สามารถถามครูผู้สอนได้โดยตรง
                                เพราะครูสอนสดแบบตัวต่อตัว ไม่ได้เป็นการเรียนผ่านเทป พ่อแม่พี่เห็นความสำคัญของการศึกษาว่าเป็นการลงทุนที่คุ้มค่าจึงสนับสนุนพี่อย่างเต็มที่ สรุปคือ ต้องรู้ก่อนว่าเป้าหมายเราคืออะไร ศึกษาให้ละเอียด และดูระยะทางที่สั้นที่สุดที่พุ่งตรงไป หรือเรียกว่า การกระจัดนั่นเอง อิ ๆ
                                </h5>
                                </div>

                        </div>
                        <br></br>
                        <div className = 'row'>
                            <strong className = 'blue'>มุ่งชนเป้าหมาย</strong>
                        </div>
                        <div className = 'row'>
                                <img src={'src/client/app/assets/images/accounting3.jpg'} className='img-responsive left-align'/>
                                <div className = 'accounting-content'>
                                    <h5>
                                    พี่แนะนำ <strong>ให้เขียนเป้าหมายใส่กระดาษ</strong> และแปะบนกำแพง ในทุกที่ที่เราจะเห็น โยเฉพาะหน้าโต๊ะหนังสือ เมื่อเราเห็นมันทุกวัน
                                    เราก็จำซึมซับใส่สมอง หรือตอนท้อ ขี้เกียจ แค่เงยหน้าขึ้นมา จะเหมือนเตือนน้องกลายๆว่า <strong className = 'blue'>“เห้ยยย อนาคตเรานะ สู้ดิวะ”</strong> ขอกระซิบ
                                    ถ้าน้องขี้เกียจแบบไม่มีอะไรมาหยุดได้ ให้คิดว่า <strong className = 'blue'>“เออ  ไม่มีอะไรได้มาง่ายๆนะแก คนอื่นก็อ่านหนังสือเหมือนกัน”</strong> พยายามอย่าไปเทียบกับคนอื่น
                                    เราแข่งกับตัวเราเนอะ ไม่ว่านักเรียนไทย หรือนักเรียน Harvard ก็อ่านหนังสือแทบบ้าเหมือนกัน
                                    </h5>
                                </div>
                        </div>
                        <br></br>
                        <div className = 'row'>
                            <strong className = 'blue'>ตัดขาดจากโลกภายนอก</strong>
                        </div>
                        <div className = 'row'>
                                <img src={'src/client/app/assets/images/accounting4.jpg'} className='img-responsive accounting-image'/>
                                <div className = 'accounting-content'>
                                    <h5>
                                    ข้อนี้สำคัญนะคะ  พี่คิดว่า เวลาอ่านหนังสือ ไม่ควรมีอะไรมารบกวนจิตใจหรือหันเหความสนใจ ซึ่ง<br></br>
                                    <strong className = 'blue'>สิ่งที่ดึงดูดใจเรามากที่สุดคือ smartphone นั่นเอง</strong> ดังนั้นไม่ควรวางไว้ใกล้ๆตัวนะคะ  เพราะอาจจะเสียสมาธิได้ง่ายๆ แนะนำให้ ปิดมือถือ
                                    ไปเลย ถ้าน้องมีคำถามหรือสงสัยที่จะถามเพื่อน ลองแก้ปัญหาด้วยตัวเองก่อนน้า ถ้าไม่ออก ไม่ไหวจริง ๆ รวบรวมคำถาม แล้วถามเพื่อนทีเดียวเนอะ
                                    </h5>
                        </div>

                        </div>
                        <br></br>
                        <div className = 'row'>
                            <h5>
                            ทั้งหมดนี้ คือ เคล็ดลับของพี่ จริง ๆไม่ใช่เคล็ดลับอะไรหรอก แต่เป็นวิธีที่ทำให้พี่เป็นพี่ตังเมได้อย่างทุกวันนี้ค่ะ จำไว้น้า <strong className = 'blue'>“คนฉลาดสู้คนขยันไม่ได้”</strong> สู้ๆ <strong>อดทนเพื่อความสำเร็จของน้อง พี่เชื่อว่าน้องทำได้</strong>
                            </h5>
                        </div>
                        <div className = 'row'>
                        <br></br>
                        <div className = 'quote-padding m-yellow text-center'>ฝากติดตามเพจเคล็ดลับการเรียนที่พี่ๆ CULH ได้ตั้งใจทำขึ้นมาเพื่อน้องๆด้วยนะคะ ที่ facebook/reangengsus</div>
                         <br></br>
                         <h5>
                        &emsp;&emsp;&emsp;&emsp;มาถึงคำถามสำคัญ ที่น้อง ๆหลายคนอยากรู้ว่า <strong>คณะพาณิชยศาสตร์และการบัญชี จุฬาลงกรณ์มหาวิทยาลัย เรียนอะไรกัน ? ใช้คะแนนอะไรยื่นรับตรงบ้าง ? มีกี่หลักสูตร ? มีกี่สาขา ? เรียนภาค Inter (BBA) หรือ ภาคไทย ดี ?</strong> วันนี้พี่ตังเม ขอแฉ เอ้ย เล่าอย่างหมดเปลือกเลยค่ะ <br></br>
                        </h5>
                        <br></br>
                        <strong className = 'blue'>คณะพาณิชยศาสตร์และการบัญชี จุฬาลงกรณ์มหาวิทยาลัย เรียนอะไรกัน ?</strong> <br></br>
                        <h5>คณะบัญชี จุฬาฯ หลายคนมักเข้าใจผิดว่า ต้องเรียนเกี่ยวกับ <strong className = 'blue'>“บัญชีอย่างเดียวแน่ ๆ”   “เรียนเกี่ยวกับตัวเลขล้วน ๆ”</strong>  ซึ่งเป็นความเข้าใจที่ผิด!!! น้อง ๆ อ่านดูแล้วจะพบว่า <strong>“คณะบัญชีให้ความรู้ ประสบการณ์ ความท้าทายให้กับชีวิต มากกว่าที่น้องเคยคิด”</strong> <br></br>
                        <strong className = 'blue'>บัญชีจุฬาฯ มีกี่หลักสูตร ? มีกี่ภาค ?</strong> <br></br><br></br>
                        ในระดับปริญญาตรี คณะของเรา มี 4 หลักสูตร ได้แก่ บัญชี  บริหาร สถิติ หลักสูตรอินเตอร์(BBA) <br></br>
                        ซึ่งมี 5 ภาควิชา ได้แก่<br></br>
                        1. การบัญชี (Accounting) “บัญชี บัญชี” <br></br>
                        2.  พาณิชยศาสตร์ (Commerce) <br></br>
                        3.  การธนาคารและการเงิน (Banking and Finance) 		รวมเรียกว่า “บัญชี บริหาร” <br></br>
                        4.  การตลาด (Marketing) <br></br>
                        5.  สถิติ (Statistics) “บัญชี สถิติ” <br></br>
                        <div className = 'citation'>ดูข้อมูลเพิ่มเติมได้ที่ http://www.chula.ac.th/admission/course/faculty-of-commerce-and-accountancy<br></br>
                        https://www.cbs.chula.ac.th/programs-th/</div>
                        แต่ละภาควิชาเนี่ย หินๆทั้งนั้นเลยจ้า ถ้าจะเขียนอย่างละเอียดทุกอัน อ่าน 2 วัน คงไม่จบแน่นอน วันนี้พี่จะขอเล่าโดย<strong>ภาพรวมและเจาะเฉพาะภาคการตลาด</strong>ก่อนเนอะ ว่า<br></br>
                    </h5>
                        </div>
                        <div className='row accounting-header'>
                            <img src={'src/client/app/assets/images/accounting5.jpg'} className='img-responsive header-image'/>
                            <strong className = 'blue'>บัญชีจุฬาฯแต่ละชั้นปี เขาเรียนอะไรกัน ทำไรกันบ้าง?</strong>
                        </div>
                        <div className = 'row'>
                            <h5>
                            <strong>ชั้นปีที่ 1</strong> หรือที่เรียกว่า “เฟรชชี่” เป็นปีที่<strong>ทุกภาคจะเรียนวิชาพื้นฐานก่อน</strong> เช่น การบัญชีขั้นต้น(พี่ขอพูดเลยว่า วิชานี้ หนาววว...) , Calculus , สถิติ , ภาษาอังกฤษ เป็นต้น เพื่อปรับพื้นฐานของเด็ก ๆ และเตรียมตัวเลือกภาควิชาที่ชอบในตอนขึ้นปี 2 รวมทั้ง<br></br> <strong>เน้นทำกิจกรรมรับน้อง</strong> <br></br>
                            <strong>ชั้นปีที่ 2</strong> ก็จะ<strong>เริ่มเรียนวิชาของภาคที่ตัวเองเลือก</strong>แต่น้อง ๆก็ยังมีเรียนวิชาบังคับที่ทุกภาคได้เรียน เช่น การบัญชีขั้นกลาง(วิชานี้เป็นภาคต่อจากการบัญชีขั้นต้น หนาวยิ่งกว่า....) , Business Finance(การเงินธุรกิจ) , Business Economics(เศรษฐศาสตร์ธุรกิจ) เห็นมั้ยคะน้อง ๆ บัญชีไม่ได้เรียนแค่บัญชีอย่างเดียวนะ เรา
                            <strong className = 'blue'> “เรียนเศรษฐศาสตร์และการเงิน”</strong> ด้วย <br></br>
                            <strong>ชั้นปีที่ 3</strong>  <strong className = 'blue'>ภาคการตลาด</strong> <strong>จะได้เรียนเกี่ยวกับการตลาดอย่างละเอียด</strong>มากขึ้น มีวิชาที่แปลกๆใหม่ๆ ให้ได้เรียน เช่น Service Marketing ,Pricing และ Business Law เห็นมั้ยคะ น้อง ๆ รู้อีกอย่างนึงละ ว่า
                            <strong className = 'blue'> “บัญชีได้เรียนกฎหมายเกี่ยวกับธุรกิจ”</strong> เพิ่มด้วยนะ ปีนี้เป็นปีที่เรียนค่อนข้างหนักและได้<strong>ฝึกงานกับบริษัท</strong>ชั้นนำมากมาย <br></br>
                            <strong>ชั้นปีที่ 4</strong>  การเรียนจะน้อยลง <strong>เน้นแข่งขันแผนการตลาด</strong> ซึ่งน้อง ๆจะได้<strong>ประสบการณ์การชีวิตและทำงาน</strong>อีกแบบ ได้ฝึกทำงานร่วมกับเพื่อน ๆ มากขึ้น ปีนี้แหละ น้อง ๆ จะสนิทกับอาจารย์มากที่สุด <br></br>
                        </h5>
                        </div>
                            <br></br>
                        <div className = 'row'>
                        <strong className = 'blue'>บัญชีจุฬาฯ อินเตอร์ เรียนอะไร?</strong>
                        <h5>
                        <br></br>หลักสูตรบัญชี จุฬาฯ อินเตอร์ หรือที่น้อง ๆเรียกว่า <strong className = 'blue'>BBA Chula</strong> การเรียนการสอนทั้งหมดจะคล้ายกับ <strong>“หลักสูตรบริหารแต่เป็นภาษาอังกฤษ”</strong> แน่นอนว่าจะช่วยเพิ่มทักษะภาษาอังกฤษให้น้อง ๆอย่างมากเลยทีเดียว <br></br>
                    </h5>
                        </div>
                        <br></br>
                        <div className = 'row'>
                            <strong className = 'blue'>คณะคณะพาณิชยศาสตร์และการบัญชี จุฬาฯ ใช้คะแนนอะไรบ้าง ?</strong> <br></br>
                            <h5>
                            <strong>คณะพาณิชยศาสตร์และการบัญชี จุฬาฯ รับตรง</strong> (แบบปกติ) ใช้คะแนน <strong>GAT PAT 1 และ PAT 2 (เฉพาะหลักสูตรสถิติ)</strong><br></br>
                            <div className = 'citation'>ดูรายละเอียดเพิ่มเติม จาก http://www.admissions.chula.ac.th/<br></br>
ไฟล์รายละเอียด รับตรง บัญชี ปี 2560 http://www.admissions.chula.ac.th/images/stories/Account_Direct2560.pdf </div>
                            </h5>
                        </div>
                        <br></br>
                        <div className = 'row'>
                            <strong>คณะพาณิชยศาสตร์และการบัญชี จุฬาฯ Admission</strong><br></br>
                            <h5>
                                บัญชี บัญชี   - สัดส่วนคะแนนที่ใช้ GPAX 20% + O-NET 30% + GAT 30% + PAT1 20%<br></br>
                                บัญชี บริหาร - สัดส่วนคะแนนที่ใช้ GPAX 20% + O-NET 30% + GAT 30% + PAT1 20%<br></br>
                                บัญชี สถิติ     - สัดส่วนคะแนนที่ใช้ GPAX 20% + O-NET 30% + GAT 30% + PAT1 20%<br></br>
                                <div className = 'citation'>ดูรายละเอียดเพิ่มเติมได้ที่ เว็บไซต์ของ สทศ. http://www.niets.or.th/
                                น้อง ๆ สามารถตรวจสอบคะแนนรับตรง จุฬา ได้ทาง www.atc.chula.ac.th/admission2/Score59.pdf
                                </div>
                            </h5>
                        </div>
                        <div className = 'row'>
                        <h5>
                        &emsp;&emsp;สุดท้าย พี่ตังเมคิดว่า พี่ไม่เสียใจเลยที่ได้เรียนคณะนี้ เพราะคณะนี้ได้ “ให้” พี่มากมายเหลือเกิน ทั้งความรู้ เพื่อน อาจารย์ที่รัก และประสบการณ์ที่หาไม่ได้แล้วจากที่อื่น
                        พี่อยากให้น้อง ๆมาเป็นรุ่นน้องของพี่ แล้วน้อง ๆก็จะรู้เองว่า
                        <strong className = 'blue'>“คณะบัญชี จุฬาฯจะมอบสิ่งที่ดี ๆแบบที่พี่ได้รับ ให้กับน้อง ๆด้วยเช่นกัน”</strong>
                    </h5>
                        </div>
                        <br></br>
                        <div className = 'row'>
                            <h5>
                            *ถ้าน้อง ๆ ต้องการ<strong>เพิ่มเกรด</strong>ในห้องเพื่อยื่นรับตรงหรือAdmission หรือ <strong>สอบแข่งขันเข้ามหาวิทยาลัย</strong> เช่น GAT/ PAT / ONET /TU-STAR
                            <br></br>หรือ<strong>สนามแข่งอินเตอร์</strong> เช่น SAT /GRE/ GED /TOEFL/ CU-TEP/ CU ATT/ TU-GET
                            <br></br>พี่ๆ CULH ยินดีจัดส่งติวเตอร์คุณภาพ สอนด้วยใจ ไปช่วยติวถึงที่บ้านแบบตัวต่อตัว <strong className = 'blue'>“อดทน ขยัน แล้วเราจะประสบความสำเร็จไปด้วยกัน”</strong> <br></br>
                        </h5>
                        </div>

                        <div className = 'row'>
                            <div className = 'col-md-4 col-md-offset-4 m-yellow text-center whyus link-padding'>
                                <a href = '/#whyus'>ทำไมต้องเรา</a>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default AccountingArticle;
