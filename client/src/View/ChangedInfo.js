import "./ChangedInfo.css"

const ChangedInfo = () => {
    return(
        <div className="ChangedInfo">
        <div className="changedinfo_box">
            <div className="changedinfo_input">
            <label>
                아이디
            <input type="text" title="아이디" id="userId" className="changedinfo_wrap"/>
            </label>
        </div>
        <div className="changedinfo_input">
            <label>
                이 름
            <input type="text" title="이름" id="userName" className="changedinfo_wrap"/>
            </label>
        </div>
        <div className="changedinfo_input">
            <label>
                이메일
            <input type="email" title="이메일" maxLength={50} id="userEmail" className="changedinfo_wrap"/>
            </label>
        </div>
        <div className="changedinfo_input">
            <label>
                전화번호
            <input type="tel" title="전화번호" placeholder="숫자만 입력해주세요(-제외)" maxLength={11} id="userPhone" className="changedinfo_wrap"/>
            </label>
        </div>
        <div className="changedinfo_input">
            <label>
                닉네임
            <input type="text" title="닉네임" placeholder="2~20자 안으로 가능합니다." maxLength={20} id="nickName" className="changedinfo_wrap"/>
            </label>
        </div>
        </div>
        <div className="btn_area">
            <button className="changedinfo_btn">확인</button>
        </div>
        </div>
    )
}

export default ChangedInfo;