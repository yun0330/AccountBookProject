import "./IncomeExpense.css"

const IncomeExpense = () => {
    return(
        <div className="IncomeExpense">
            <div className="incomeexpense_date">
            {/* < 0000년 0월 >*/}
            </div>
            <div className="incomeexpense_box">
                <h2>입출금 내역</h2>
                <table className="incomeexpense_table">
                    <tbody>
                        <tr>
                        <td>날짜</td>
                        <td>수입지출</td>
                        <td>카테고리</td>
                        <td>수입지출 내역</td>
                        <td>메모</td>
                        <td>금액</td>
                        <td>펜</td>
                        <td>휴지통</td>
                        </tr>
                    </tbody>
                </table>
                <div className="pagination">
                    <button>이전</button>
                    <button>다음</button>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpense;