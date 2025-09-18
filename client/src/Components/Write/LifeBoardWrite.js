import "./Write.css"

const LifeBoardWrite = () => {
    return(
        <div className="LifeBoardWrite">
        <div className="lifeboardwrite_box">
        <div className="lifeboardwrite_writing"><h1>생활꿀팁 작성</h1></div>
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
        <div className="file">
        <label>
            <p>파일 첨부 <input type="file" id=""/></p>
        </label>
        <input type="text" id="file_info" placeholder="파일 경로"/>
        <button className="browse_btn">찾아보기</button>
        </div>
        <div className="write_btn">
            <button type="submit">글쓰기</button>
        </div>
        </div>
        </div>
    )
}

export default LifeBoardWrite;