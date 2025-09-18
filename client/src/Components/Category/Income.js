import "./Income.css"

const Income = () => {
    
    return(
        <div className="income">
        <div className="income_box">
        <div className="income_option">
        <p>카테고리</p>
        </div>
        <div className="income_sub">
        <p>수입 내역</p>
        </div>
        <div className="income_input">
        <p>금액</p><input type="text" maxLength={7} className="income_item"/><p>원</p>
        <p>날짜</p><input type="date" className="income_item"/>
        <p>메모</p><input type="text" maxLength={30} className="income_item"/>
        </div>
        </div>
        <div className="btn_area">
            <button>취소</button>
            <button>확인</button>
        </div>
        </div>
    )
}

export default Income;