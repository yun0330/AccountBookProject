import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import FindPassword from "./View/FindPassword";
import FindId from "./View/FindId"
import SidebarMenu from "./Components/Sidebar/SidebarMenu";
import DashBoard from "./View/DashBoard";
import IncomeExpense from "./View/IncomeExpense";
import FriendList from "./View/FriendList";
import AdminChatting from "./Components/Chatting/AdminChatting";
import BulletinBoard from "./Components/BulletinBoard/BulletinBoard"
import BulletinList from "./View/BulletinList";
import NoticeList from "./View/NoticeList";
import Setting from "./View/Setting";
import Calendar from"./View/Calendar"
import Consent from "./View/Consent";
import Membership from "./View/Membership";
import ChangedPassword from "./View/ChangedPassword";
import ChangedInfo from "./View/ChangedInfo";
import LifeBoardList from "./View/LifeBoardList";
import BulletinWrite from "./Components/Write/BulletinWrite";
import LifeBoardWrite from "./Components/Write/LifeBoardWrite";
import FriendWrite from "./Components/Write/FriendWrite";
import NoticeWrite from "./Components/Write/NoticeWrite";
import Footer from "./Components/Footer/Footer"
import Login from "./View/Login";
import Main from "./View/Main";
import Tos from "./Components/Modal/Tos";
import Income from "./Components/Category/Income"
function App() {
  return (
    <Router>
      <Routes>
<Route path="/a" element={<SidebarMenu />} />
<Route path="/b" element={<DashBoard />} />
<Route path="/c" element={<IncomeExpense />} />
<Route path="/d" element={<FriendList />} />
<Route path="/2" element={<AdminChatting />} />
<Route path="/g" element={<BulletinBoard />} />
<Route path="/4" element={<BulletinList />} />
<Route path="/n" element={<NoticeList />} />
<Route path="/h" element={<Setting />} />
<Route path="/i" element={<Calendar />} />
<Route path="/j" element={<Consent />} />         {/*css완*/}
<Route path="/k" element={<Membership />} />      {/*css보정필요*/}
<Route path="/l" element={<ChangedPassword />} /> {/*css완*/}
<Route path="/m" element={<ChangedInfo />} />     {/*css완*/}
<Route path="/o" element={<LifeBoardList />} />
<Route path="/p" element={<BulletinWrite />} />
<Route path="/q" element={<LifeBoardWrite />} />
<Route path="/r" element={<FriendWrite />} />
<Route path="/s" element={<NoticeWrite />} />
<Route path="/t" element={<Footer />} />          {/*css완*/}
<Route path="/u" element={<Login />} />           {/*css보정필수*/}
<Route path="/v" element={<Main />} />
<Route path="/5" element={<FindId />} />          {/*css완*/}
<Route path="/6" element={<FindPassword />} />    {/*css완*/}
<Route path="/7" element={<Tos />} /> 
<Route path="/8" element={<Income />} /> 
</Routes>
</Router>
  );
}

export default App;
