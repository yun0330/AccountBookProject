import { Link } from "react-router-dom";
const AdminMenu = () => {
    return(
        <div className="AdminMenu">
        <div className="admin_menu_profile"></div>
        <ul>
            <li>
            <Link to="/">커뮤니티</Link>
            </li>
            <li>
            <Link to="/">1:1문의</Link>
            </li>
        </ul>
        <div className="admin_logout">
            <a href="/">Logout</a>
        </div>
        </div>
    )
}

export default AdminMenu;