import "./Spending.css"

const Spending = () => {
    
    return(
    <div className="spending">
        <div className="spending_box">
        <div className="spending_option">
        <p>카테고리</p>
        </div>
        <div className="spending_sub">
        <p>지출내역</p>
        </div>
        <div className="spending_input">
        <p>금액</p><input type="text" maxLength={7} className="spending_item"/><p>원</p>
        <p>날짜</p><input type="date" className="spending_item"/>
        <p>메모</p><input type="text" maxLength={30} className="spending_item"/>
        </div>
        </div>
        <div className="btn_area">
        <button>취소</button>
        <button>확인</button>
        </div>
    </div>
    )
}

export default Spending;