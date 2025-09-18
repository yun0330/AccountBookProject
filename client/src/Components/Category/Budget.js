import "./Budget.css"
import { FcBarChart } from "react-icons/fc";

const Budget = () => {
    
    return(
        <div className="budget"> 
            <div className="budget_title">
            <h2>이번달 예산을 설정해 주세요</h2>
            </div>
            <div className="budet_setting">
            <FcBarChart /><input type="text" maxLength={8} className="budet_item"/><p>원</p>
            </div>
            <div className="btn_area">
            <button className="budet_btn">확인</button>
            </div>
        </div>
    )
}

export default Budget;