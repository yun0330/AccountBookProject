import "./Calendar.css"
import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
    const events = [
        { title: 'Sample Event', date: new Date() },]
    return(
        <div className="Calendar">
            <div className="calendar">
<FullCalendar 
       plugins={[dayGridPlugin]} 
       initialView="dayGridMonth" 
       events={events} /*events 배열은 달력에 표시될 이벤트 목록이다.*/
     />
     </div>
     <div>
        <p>예산:0000</p>
        <p>수입:+0000</p>
        <p>지출:-0000</p>
        <button>엑셀 파일 받기</button>
     </div>
        </div>
        
    )
}

export default Calendar;