import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => (
  <div className="category">
    <dl>
      <dt>
        <span className="tit">
          <b>뮤지컬</b>
        </span>
      </dt>
      <dd>
        <Link to="/musical">오리지널/내한공연</Link>
      </dd>
      <dd>
        <a href="#">라이센스</a>
      </dd>
      <dd>
        <a href="#">창작뮤지컬</a>
      </dd>
      <dd>
        <a href="#">넌버별 퍼포먼스</a>
      </dd>
      <dd>
        <a href="#">패키지공연</a>
      </dd>
      <dd id="ee">
        <a href="#">MD샵</a>
      </dd>
      <dd className="Mgray">
        <a href="#">지역별 예매</a>
      </dd>
      <dd className="Mgray">
        <a href="#">날짜별 예매</a>
      </dd>
    </dl>
  </div>
);

export default Category;
