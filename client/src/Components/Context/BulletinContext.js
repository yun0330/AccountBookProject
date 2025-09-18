import "./Context.css"

const BulletinContext = () => {

    return (
        <div className="BulletinContext">
        <div className="bulletin_title"><h2>자유게시판</h2></div>
        <div className="bulletincontext_box">
        <div className="bulletinc_form">
        <label>제목</label><input type="text" maxLength={30} placeholder="최대 30글자 이내 작성" className="form_title"/>
        </div>
        <div className="bulletinc_form">
        <label>내용</label><textarea maxLength={200} placeholder="최대 200글자" className="form_content"/>
        </div>
        <div className="bulletinc_form">
        <label>이미지</label>
        <input type="text" className="form_file"/>
        <input type="file" style={{ display: 'none' }}/>
        <button className="file_btn">파일선택</button>
        </div>
        <div className="bulletinc_btn_area">
        <button className="bulletinc_btn">확인</button>
        </div>
        </div>
        </div>
    )
}

export default BulletinContext;