import "./Main.css"

const Main = () => {
    return(
    <div className="main">
    <div className="Login_box"></div>
    <div className="main_dashboard">
    <div className="dashboard_img"></div>
    <div className="feature">
    <h2>거래내역 엑셀 연동 관리 시스템</h2>
    <p>각종 결제 및 청구서/거래내역을 손쉽게 검토 및 입력을 통해 엑셀파일로 받아 볼 수있습니다.</p>
    </div>
    </div>
    <div className="main_incomeexpense">
    <div className="incomeexpense_img"></div>
    <div className="feature">
    <h2>현명한 소비,확실한 계획</h2>
    <p>우리 생활에 수입과 소비는 신경쓰지 않을 수 없는것 입니다 <br/> 그것을 정확히 파악하고 미래 계획을 세울 수 있도록 저희 마음모아부에서 관리해보세요. </p>
    </div>
    </div>
    <div className="main_community">
    <div className="community_img"></div>
    <div className="feature">
    <h2>혼자가 아닌,함께하는 재정 관리</h2>
    <p>커뮤니티 형성으로 대화 및 꿀팁 공유가 가능합니다.</p>
    </div>
    </div>
    <div className="main_accessibility">
    <div className="accessibility_img"></div>
    <div className="feature">
    <h2>편리한 접근성</h2>
    <p>웹 브라우저 뿐만아니라 모바일 앱에서도 사용이 가능합니다.</p>
    </div>
    </div>
    </div>
    )
}

export default Main;