import "./Write.css"

const FriendWrite = () => {
    return(
        <div className="FriendWrite">
        <div className="friendwrite_box">
        <div className="friendwrite_writing"><h1>마음모아봐요 작성</h1></div>
        <div className="title">
        <label>
        <p>제목 <input type="text" id=""/></p>
        </label>
        </div>
        <div className="content">
        <label>
            <p>내용 <input type="text" id=""/></p>
        </label>
        </div>
        <div className="write_btn">
            <button type="submit">글쓰기</button>
        </div>
        </div>
        </div>
    )
}

export default FriendWrite;