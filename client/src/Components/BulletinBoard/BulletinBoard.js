import { Link } from "react-router-dom";
import "./BulletinBoard.css"

const BulletinBoard = () => {
    return(
        <div className="BulletinBoard">
            <ul>
            <li><Link to="/"><span>공지사항</span></Link></li>
            <li><Link to="/"><span>자유게시판</span></Link></li>
            <li><Link to="/"><span>생활꿀팁</span></Link></li>
            <li><Link to="/"><span>마음모아봐요</span></Link></li>
            <li><Link to="/"><span>1:1문의</span></Link></li>
            </ul>
        </div>
        
    )
}
export default BulletinBoard;