import "./Chatting.css"

const FriendChatting = () => {
    return(
        <div className="FriendChatting">
            <div className="chatting_box">
            <div className="friend_chatting_box">
                    <div className="friend_profile">{/* 친구 프사 */}</div>
                    <p>대화</p> <span>시간</span>
                </div>
                <div className="friend_chatting_box">
                <div className="friend_profile">{/* 친구 프사 */}</div>
                    <p>대화</p> <span>시간</span>
                </div>
                <div className="friend_message">
                    <input type="text" placeholder="메세지를 입력해주세요"/>
                    <button>보내기</button>
                    </div>
            </div>
        </div>
    )
}

export default FriendChatting;