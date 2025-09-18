import { Link } from "react-router-dom";

const Infor_Type = () => {
    
    return(
        <div className="infor_type">
            <div className="change_type">
            <Link to="/" className="change_for"><p>기본정보 변경</p></Link>
            <Link to="/" className="change_for"><p>비밀번호 변경</p></Link>
            </div>
        </div>
    )
}

export default Infor_Type;