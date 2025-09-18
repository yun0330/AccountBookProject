import "./Chatting.css"

const AdminChatting = () => {
    return(
        <div className="AdminChatting">
            <div className="chatting_box">
                <div className="admin_chatting_box">
                    <div className="admin_profile">{/* 관리자프사 */}</div>
                    <p>대화</p> <span>시간</span>
                </div>
                <div className="admin_chatting_box">
                    <div className="friend_profile">{/* 문의자 프사 */}</div>
                    <p>대화</p> <span>시간</span>
                </div>
                <div className="admin_message">
                    <input type="text" placeholder="메세지를 입력해주세요"/>
                    <button>보내기</button>
                </div>
            </div>
        </div>
    )
}

export default AdminChatting;