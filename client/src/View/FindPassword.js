import "./FindPassword.css"

const FindPassword = () => {
    return(
        <div className="FindPassword">
        <div className="findpw_box">
        <div className="findpw_title">
        <h2>비밀번호 찾기</h2>
        </div>
        <div className="findpw_input">
        <input type="text" placeholder="아이디" maxLength={20} className="findpw_item"/>
        <input type="text" placeholder="이메일" maxLength={50} className="findpw_item"/>
        </div>
        <div className="btn_area">
        <button className="findpw_btn">확인</button>
        </div>
        </div>
        </div>
    )
}

export default FindPassword;