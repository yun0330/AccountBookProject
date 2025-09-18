import "./FriendList.css"

const FriendList = () => {
    return(
        <div className="FriendList">
            <div className="friendlist_code">
            <input type="text" placeholder="친구코드" maxLength={20}/>
            <button>추가</button>
            </div>
            <div className="friendlist_box">
                <div className="friend">
                    {/* 프사 */}
                    <p>이름</p>
                    <p>000000원</p> <span>+₩50</span>
                </div>
                <div className="pagination">
                    <button>이전</button>
                    <button>다음</button>
                </div>
            </div>
        </div>
    )
}

export default FriendList;