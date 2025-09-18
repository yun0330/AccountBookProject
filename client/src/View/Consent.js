import "./Consent.css"
import { GoArrowRight } from "react-icons/go";

const Consent = () => {
    return(
        <div className="Consent">
        <div className="consent_title">
            <h1>약관 동의가 필요해요.</h1>
            </div>
            <div className="all_consent">
            <label>
            <input type="checkbox" className="full_consent"/>
            <p>약관 전체동의 <span>선택항목 포함</span></p>
            </label>
            </div>
            <div className="consent_item">
            <label><input type="checkbox" name="check1"/>
            <p>(필수) 이용약관</p></label>
            <button><GoArrowRight/></button>
            </div>
            <div className="consent_item">
            <label><input type="checkbox" name="check2"/>
            <p>(필수) 개인정보 수집 이용동의</p></label>
            <button><GoArrowRight /></button>
            </div>
            <div className="consent_item">
            <label><input type="checkbox" name="check3"/>
            <p>(선택) 개인정보 수집 이용동의</p></label>
            </div>
            <div className="btn_area">
                <button className="consent_btn">다음</button>
            </div>
        </div>
    )
}

export default Consent;