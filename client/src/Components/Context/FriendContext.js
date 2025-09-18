import "./Context.css"

const FriendContext = () => {
    return (
        <div className="FriendContext">
        <div className="friend_title"><h2>함께 모아</h2></div>
        <div className="friendcontext_box">
        <div className="friend_form">
        <label>제목</label> <input type="text" maxLength={30} placeholder="최대 30글자 이내 작성" className="form_title"/>
        </div>
        <div className="friend_form">
        <label>내용</label> <textarea maxLength={200} placeholder="최대 100글자" className="form_content"/> 
        </div>
        <div className="friend_btn_area">
            <button className="friend_btn">확인</button>
        </div>
        </div>
        </div>
        
    )
}
export default FriendContext;