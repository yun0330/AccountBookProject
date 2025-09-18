import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarMenu.css"

const SidebarMenu = () => {
    
    return (
        <div className="SidebarMenu">
            <div className="meun_profile">
                {/*프로필*/}
            </div>
        <ul>
            <li>
            <Link to="/"><span>대시 보드</span></Link>
            </li>
            <li>
            <Link to="/"><span>수입/지출내역</span></Link>
            </li>
            <li>
            <Link to="/"><span>캘린더</span></Link>
            </li>
            <li>
            <Link to="/"><span>친구 목록</span></Link>
            </li>
            <li>
            <Link to="/"><span>커뮤니티</span></Link>
            </li>
            </ul>
            <ul>
                <li>
                <Link to="/"><span>설정</span></Link>
                </li>
                <li>
                <a href="/"><span>Logout</span></a>
                </li>
            </ul>
        </div>

    )
}

export default SidebarMenu;