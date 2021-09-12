import React from "react";
import "./Ranking.css";
import { Link } from "react-router-dom";

const Ranking = () => {
  return (
    <div className="list">
      <div className="contents">
        <h2 className="title">WEEKLY RANKING</h2>
        <ul>
          <li>
            <Link to="/musical">1위 : 광화문 연가</Link>
          </li>
          <li>
            <a href="#"> 2위 : 시카고</a>
          </li>
          <li>
            <a href="#">3위 : 드라큘라</a>
          </li>
          <li>
            <a href="#">4위 : 캣츠</a>
          </li>
          <li>
            <a href="#">5위 : 레미제라블</a>
          </li>
        </ul>
      </div>
      <img
        src="http://ticketimage.interpark.com/TCMS3.0/MU/THEME_1/2105/210517040326_21004051.gif"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Ranking;
