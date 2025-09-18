import "./Context.css"

const LifeBoardContext = () => {

    return (
        <div className="LifeBoardContext">
        <div className="lifeBoard_title"><h2>생활꿑팁</h2></div>
        <div className="lifeBoardcontext_box">
        <div className="lifeBoard_form">
        <label>제목</label> <input type="text" maxLength={30} placeholder="최대 30글자 이내 작성" className="form_title"/>
        </div>
        <div className="lifeBoard_form">
        <label>내용</label> <textarea maxLength={100} placeholder="최대 200글자" className="form_content"/>
        </div>
        <div className="lifeBoard_form">
        <label>이미지</label>
        <input type="text" className="form_file"/>
        <input type="file" style={{ display: 'none' }}/>
        <button className="file_btn">파일선택</button>
        </div>
        <div className="lifeBoard_btn_area">
        <button className="lifeBoard_btn">확인</button>
        </div>
        </div>
        </div>
    )
}

export default LifeBoardContext;