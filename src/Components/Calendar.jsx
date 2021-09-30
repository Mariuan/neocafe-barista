import React from 'react';
import './CSS/calendar-graph.css';

const Calendar = () => {
    const days = [];
    for (let i = 1; i <= 35; i){
        if (i > 31) {
            days.push({id: i, day: i-31, weekDay: 'Пн'});
            i++;
        }
        else {
            days.push({id: i, day: i, weekDay: 'Пн'});
            i++;
        }
        if (i > 31){
            days.push({id: i, day: i-31, weekDay: 'Вт'});
            i++;
        }
        else {
            days.push({id: i, day: i, weekDay: 'Вт'});
            i++;
        }
        if (i > 31){
            days.push({id: i, day: i-31, weekDay: 'Ср'});
            i++;
        }
        else {
            days.push({id: i, day: i, weekDay: 'Ср'});
            i++;
        }
        if (i > 31){
            days.push({id: i, day: i-31, weekDay: 'Чт'});
            i++;
        }
        else {
            days.push({id: i, day: i, weekDay: 'Чт'});
            i++;
        }
        if (i > 31){
            days.push({id: i, day: i-31, weekDay: 'Пт'});
            i++;
        }
        else {
            days.push({id: i, day: i, weekDay: 'Пт'});
            i++;
        }
        if (i > 31){
            days.push({id: i, day: i-31, weekDay: 'Сб'});
            i++;
        }
        else {
            days.push({id: i, day: i, weekDay: 'Сб'});
            i++;
        }
        if (i > 31){
            
        }
        else {
            days.push({id: i, day: i, weekDay: 'Вс'});
            i++;
        }
    }
    console.log(days);
    return (
        <div className="calendar-graph">
            <div className="weekdays-line">
                <div className="weekday">Пн</div>
                <div className="weekday">Вт</div>
                <div className="weekday">Ср</div>
                <div className="weekday">Чт</div>
                <div className="weekday">Пт</div>
                <div className="weekday">Сб</div>
                <div className="weekday">Вс</div>
            </div>
            <div className="calendar-days">
                {days.map((day)=>{
                    if (day.id > 35) return false;
                    else if (day.weekDay === 'Чт' || day.weekDay === 'Пт') return <div className="days weekend" key={day.id}>{day.day}</div>
                    else if (day.weekDay === 'Ср') return <div className="days nightShift" key={day.id}>{day.day}</div>
                    else {
                        return <div className="days dayShift" key={day.id}>{day.day}</div>
                    }
                })}
            </div>
        </div>
    )
}

export default Calendar