import "./FindId.css"


const FindId = () => {

return(
    <div className="FindId">
    <div className="findid_box">
    <div className="findid_title">
    <h2>아이디 찾기</h2>
    </div>
    <div className="findid_input">
    <input type="text" placeholder="이메일"maxLength={50} className="findid_item"/>
    <input type="text" placeholder="휴대폰 번호" maxLength={11} className="findid_item"/>
    </div>
    <div className="btn_area">
    <button className="findid_btn">확인</button>
    </div>
    </div>
    </div>
)
};

export default FindId;