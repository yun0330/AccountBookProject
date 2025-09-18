import "./Membership.css"

const Membership = () => {
    return(
        <div className="Membership">
        <div className="membership_box">
        <div className="member_title">
            <h1>회원 가입</h1>
        </div>
        <div className="member_info">
        <div className="member_input">
        <label>
            <p className="membership_wrap">
            <input type="text" title="아이디" placeholder="아이디" maxLength={20} id="userId" className="member_item"/>
            <button className="duplication">중복확인</button>
            </p>
        </label>
        <div className="member_msg">4~20자리 영문 소문자, 숫자 조합만 가능합니다</div>
        </div>
        <div className="member_input">
            <p className="membership_wrap">
            <label>
            <input type="password" title="비밀번호" placeholder="비밀번호" maxLength={20} id="userPW" className="member_item"/>
            </label>
            </p>
            <div className="member_msg">8~20자리 영문, 숫자, 특수문자 조합</div>
        </div>
        <div className="member_input">
            <p className="membership_wrap">
            <label>
            <input type="password" title="비밀번호 확인" placeholder="비밀번호 확인" maxLength={20} id="comparePassword" className="member_item"/>
            </label>
            </p>
        </div>
        <div className="member_input">
            <p className="membership_wrap">
            <label>
            <input type="text" title="이름" placeholder="이름" maxLength={10} id="userName" className="member_item"/>
            </label>
            </p>
        </div>
        <div className="member_input">
            <p className="membership_wrap">
            <label>
            <input type="email" title="이메일" placeholder="이메일 (예:together@together.com)" maxLength={50} id="userEmail" className="member_item"/>
            </label>
            </p>
        </div>
        <div className="member_input">
            <p className="membership_wrap">
            <label>
            <input type="tel" title="전화번호" placeholder="휴대폰 번호(-제외)" maxLength={11} id="userPhone" className="member_item"/>
            </label>
            </p>
        </div>
        <div className="member_input">
            <p className="membership_wrap">
            <label>
            <input type="text" title="닉네임" placeholder="닉네임" maxLength={20} id="nickName" className="member_item"/>
            </label>
            </p>
            <div className="member_msg">2~20자 안으로 가능합니다.</div>
        </div>
        </div>
        <div className="btn_area">
            <button className="membership_btn">회원가입</button>
        </div>
        </div>
        </div>
    )
}

export default Membership;