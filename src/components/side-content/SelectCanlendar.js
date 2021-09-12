import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./SelectCanlendar.css"

const SelectCalendar = ({ data , func }) => {
  const [value, setValue] = useState(new Date());

  const onDateChange = (date) => {
    setValue(date)
    func(date);
  };
  return (
    <div className="Calendar_container">
      <div className="content">
        <h3>관람일</h3>
        <div className="calen">
          <Calendar onChange={onDateChange} value={value.date} defaultValue={new Date()}/>
        </div>
      </div>
    </div>
  );
};
export default SelectCalendar;
