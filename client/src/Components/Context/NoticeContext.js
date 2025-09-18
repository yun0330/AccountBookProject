import "./Context.css"
const NoticeContext = () => {
    return (
        <div className="NoticeContext">
        <div className="noticecon_title"><h2>공지사항</h2></div>
        <div className="noticecontext_box">
        <div className="noticecon_form">
        <label>제목</label><input type="text" maxLength={30} placeholder="최대 30글자 이내 작성" className="form_title"/>
        </div>
        <div className="noticecon_form">
        <label>내용</label><textarea type="text" maxLength={200} placeholder="최대 200글자" className="form_content"/>
        </div>
        <div className="noticecon_btn_area">
        <button className="noticecon_btn">확인</button>
        </div>
        </div>
        </div>
        
    )
}

export default NoticeContext;