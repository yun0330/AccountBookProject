import { Link } from "react-router-dom";
import "./DashBoard.css"


const DashBoard =() => {
    return(
        <div className="Dashboard">
            <div className="category_box">
            <h2>카테고리별 지출</h2>
            <p>식비 교통비 생활비 문화비 기타</p>
            <p>이번주 <span>생활비</span>에 가장 많은 지출을 하셨습니다.</p>
            </div>
            <div className="budget_box">
                <button>
                <h3>예산</h3>
                <p>00000원</p>
                </button>
            </div>
            <div className="income_box">
                <button><h3>수입</h3>
                <p>+ 00000원</p></button>
            </div>
            <div className="spending_box">
                <button><h3>지출</h3>
                <p>- 00000원</p></button>
            </div>
            <div className="saving">
                <button><h3>저축</h3>
                <p>+ 00000원</p></button>
            </div>
            <div className="onemonth_box">
                <h2>한달 지출</h2>
                <p>00000000원</p>
            </div>
            <div className="friend_box">
                <h2>친구 가계부</h2>
                <div className="friend_info">
                {/* 프사 */}<p>이름</p>
                <p>00000000원</p><span>+₩50</span>
                </div>
                <div>
                    <Link to="/">목록보기</Link>
                </div>
            </div>
            <div className="information">
                <h2>내정보</h2>
            {/* 이미지 */}
            <p>닉네임</p>
            <p>예산</p><p>0000원</p>
            <p>수입</p><p>0000원</p>
            <p>지출</p><p>0000원</p>
            </div>
    </div>
)
}

export default DashBoard;