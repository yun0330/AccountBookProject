import "./Setting.css"

const Setting = () => {
    return(
        <div className="Setting">
            <div className="setting_bax">
            <div className="profile">
            {/*프로필*/}
            <p>닉네임</p>
            </div>
            <div className="setting_code">
                <p>친구코드</p>
                <input type="text" maxLength={20}/>
                <button>복사</button>
            </div>
            <div className="setting_info">
                <p>이름</p>
                <p>휴대폰</p>
                <p>이메일</p>
            </div>
            <div className="withdrawal">
                <button>회원탈퇴</button>
            </div>
            </div>
        </div>
    )
};

export default Setting;