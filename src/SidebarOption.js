import React from 'react';
import './SidebarOption.css';

// ส่งรูปแบบและ style ออกไปผ่าน props //
function SidebarOption({ active, text, Icon }) {
  return (
    //เปลี่ยนจาก "" เป็น `` เพราะว่าเราจะใส่ prop เข้าไปและกำหนดให้มีชื่อคลาสตัวใหม่ชื่อ sidebarOption--active ไว้ตกแต่ง //
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
