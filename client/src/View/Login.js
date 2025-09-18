import "./Login.css"
import { Link } from "react-router-dom";
const Login = () => {
    return(
        <div className="login">
        <div className="login_box">
        <div className="login_input">
        <label>
            <input type="text" placeholder="아이디" maxLength={20} id="userId"/>
        </label>
        <label>
            <input type="password" placeholder="비밀번호" maxLength={20} id="userPw"/>
        </label>
        </div>
        <div className="login_area">
        <button className="login_but">로그인</button>
        <button>카카오 로그인</button>
        <button>구글 로그인</button>
        </div>
        <div className="login_for">
        <Link to="/" className="link_for"><p>아이디 찾기</p></Link>
        <p className="stick">|</p>
        <Link to="/" className="link_for"><p>비밀번호 찾기</p></Link>
        <p className="stick">|</p>
        <Link to="/" className="link_for"><p>회원가입</p></Link>
        </div>
        </div>
        </div>
        
    )
}

export default Login;