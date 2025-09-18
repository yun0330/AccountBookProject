
const Wihdraw = () => {

    return(
        <div className="wihdraw">
        <div className="wihdraw_title">
        <h2>회원탈퇴</h2>
        </div>
        <div className="policy">
            <h3>회원탈퇴 및 개인정보 파기</h3>
        <ol>
            <li>회원이 서비스에서 탈퇴를 신청할 경우, 회사는 지체 없이 회원의 개인정보를 파기합니다.</li>
            <li>단, 전자상거래법ㆍ통신비밀보호법 등 관련 법령에 따라 일정 기간 보관해야 하는 정보는 법령에서 정한 기간 동안 보관한 뒤 파기합니다.</li>
            <li>회원탈퇴 완료 후에는 계정 및 게시글ㆍ댓글은 복구할 수 없습니다.</li>
        </ol>
        </div>
        <div className="wihdraw_pw">
        <input type="password" placeholder="비밀번호" maxLength={20} id="uesrPw" className="wihdraw_item"/>
        <div className="wihdraw_msg">본인인증을 위해 비밀번호를 입력해주세요.</div>
        </div>
        <div className="consent_check">
            <input type="checkbox" className="consent_checkbox"/><span>유의사항 동의</span>
        </div>
        <div className="warning">
        <p>마음모아부 계정이 삭제됩니다.</p>
        </div>
        <div className="btn_area">
        <button>돌아가기</button>
        <button>탈퇴하기</button>
        </div>
        </div>
    )
}


export default Wihdraw;