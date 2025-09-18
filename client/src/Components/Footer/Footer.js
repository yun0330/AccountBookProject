import "./Footer.css"
import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <footer>
        <div className="Footer">
        <div className="footer_info">
        <div className="footer_menu">
            <ul>
            <li><Link to="">서비스 이용약관</Link></li>
            <li><Link to="">개인정보 처리방침</Link></li>
            </ul>
        </div>
        <div className="info">
            <p>
            대표자:윤00
            <br />
            TEL.032-123-4567
            </p>
        </div>
        <div className="footer_address">
            <p>
            주소: 인천 남동구 인주대로 593 엔타스 빌딩 12층</p>
            <p>회사명: 마음모아 | 사업자번호: 123-45-67890</p>
        </div>
            <div className="footer_logo_box">
            <img src="/assets/footer_logo.png" alt="account_book_logo" />
            </div>
            <div className="footer_msg">
            <p>Ⓒ 2025 household ledger 마음모아부</p>
        </div>
        </div>
        </div>
        </footer>
    )
}

export default Footer;