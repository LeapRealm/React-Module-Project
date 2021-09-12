import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import SelectCalendar from "./SelectCanlendar";
import Seat from "./Seat";
import "./Booking.css";
import { Radio } from "antd";
// import moment from "moment";
// var date = new Date();

const Booking = () => {
  const [value, setValue] = useState(true);

  const ChangeDate = (value) => {
    // date = moment(value).format("YYYY-MM-DD");
  };
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }

  if (value) {
    return (
      <div className="container">
        <div>
          <SelectCalendar func={ChangeDate} />
        </div>

        <div className="content">
          <h3>관람 시간</h3>
          <div className="time">
            <Radio.Group onChange={onChange} defaultValue="a">
              <Radio.Button value="a">1회 10:00</Radio.Button>
              <Radio.Button value="b">2회 14:00</Radio.Button>
              <Radio.Button value="c">3회 18:00</Radio.Button>
            </Radio.Group>
          </div>
        </div>

        <button className="ctlbtn" onClick={() => setValue(false)}>
          &nbsp;&nbsp;다음&nbsp;&nbsp;
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Seat />

        <div className="SeatLevel">
          <div className="R"></div>
          <div className="txt">R석</div>
          <div className="S"></div>
          <div className="txt">S석</div>
          <div className="A"></div>
          <div className="txt">A석</div>
          <div className="B"></div>
          <div className="txt">B석</div>
        </div>
        <div>
          <button
            className="ctlbtn"
            onClick={() => {
              alert("예매가 완료되었습니다!");
              setValue(true);
            }}
          >
            &nbsp;&nbsp;결제&nbsp;&nbsp;
          </button>
          <button className="ctlbtn" onClick={() => setValue(true)}>
            &nbsp;&nbsp;이전&nbsp;&nbsp;
          </button>
        </div>
      </div>
    );
  }
};

export default Booking;
