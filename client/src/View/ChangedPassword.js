import "./ChangedPassword.css"

const ChangedPassword = () => {
    return(
        <div className="ChangedPassword">
            <div className="changepassword_box">
            <div className="change_pw">
            <label>현재 비밀번호 <input type="password" maxLength={20} id="current_password" className="changepw_wrap"/></label>
            </div>
            <div className="change_pw">
            <label>새 비밀번호 <input type="password" maxLength={20} id="new_password" className="changepw_wrap"/></label> 
            <div className="member_msg">8~20자리 영문, 숫자, 특수문자 조합</div>
            </div>
            <div className="change_pw">
            <label>새 비밀번호 확인<input type="password" maxLength={20} id="confirm_password" className="changepw_wrap"/></label>
            </div>
            </div>
            <div className="btn_area">
            <button className="changed_btn">확인</button>
            </div>
        </div>
    )
}

export default ChangedPassword;