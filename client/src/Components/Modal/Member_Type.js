import { Link } from "react-router-dom";

const Member_Type = () => {

    return(
        <div className="member_type">
            <div className="member_type_box">
            <div className="sns_kakaao">
            <button>카카오</button>
            </div>
            <div className="sns_google">
                <button>구글</button>
            </div>
            <div className="general_member">
            <Link to="/">일반 회원가입</Link>
            </div>
            </div>
        </div>
    )
}

export default Member_Type;