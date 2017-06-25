import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/table.css";

class Pricing extends React.Component {
  render() {
    return (

        <div className = 'jumbotron'>
            <div className="table-title">
                <h3>อัตราค่าเรียน</h3>
            </div>
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
                            <td className="text-left">February</td>
                            <td className="text-left">$ 10,000.00</td>
                        </tr>
                        <tr>
                            <td className="text-left">March</td>
                            <td className="text-left">$ 85,000.00</td>
                        </tr>
                        <tr>
                            <td className="text-left">April</td>
                            <td className="text-left">$ 56,000.00</td>
                        </tr>
                        <tr>
                            <td className="text-left">May</td>
                            <td className="text-left">$ 98,000.00</td>
                        </tr>
                    </tbody>
                </table>
        </div>


    );
  }
}

export default Pricing;
