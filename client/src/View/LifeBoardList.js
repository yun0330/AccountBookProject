import "./LifeBoardList.css"

const LifeBoardList = () => {
    return(
        <div className="LifeBoardList">
            <div className="lifeboard_box">
            <div className="search_box">
            <input type="text" placeholder="Search"/>
            </div>
            <table>
                <tbody>
                <tr>
                <td>제목</td>
                <td>작성자명</td>
                <td>날짜</td>
                </tr>
                </tbody>
            </table>
            <div className="writing_btn">
                <button>글쓰기</button>
            </div>
                <div className="pagination_number">
                <button>{/*<*/}</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button className="active">6</button>
                <button>{/*>*/}</button>
            </div>
            </div>
        </div>
    )
}

export default LifeBoardList;