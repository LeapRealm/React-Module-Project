import React, { useState, useEffect } from "react";
import "./App.css";
import Summary from "./components/Summary";
import Detail from "./components/Detail";
import Booking from "./components/side-content/Booking";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import { Link } from "react-router-dom";

const App = () => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    axios
      .get("https://6ad20fe1-7b83-4bd2-abc6-aa156861cd11.mock.pstmn.io/content")
      .then((result) => {
        setContents(result.data);
      })
      .catch((error) => console.error("에러 발생 : ", error));
  }, []);

  const [concertDetailInformation, setConcertDetailInformation] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://6ad20fe1-7b83-4bd2-abc6-aa156861cd11.mock.pstmn.io/detailInformation"
      )
      .then((result) => {
        setConcertDetailInformation(result.data);
      })
      .catch((error) => console.error("에러 발생 : ", error));
  }, []);

  const [castingCardContents, setCastingCardContents] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://6ad20fe1-7b83-4bd2-abc6-aa156861cd11.mock.pstmn.io/cardContents"
      )
      .then((result) => {
        setCastingCardContents(result.data);
      })
      .catch((error) => console.error("에러 발생 : ", error));
  }, []);

  const [componeyInfomation, setComponeyInfomation] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://6ad20fe1-7b83-4bd2-abc6-aa156861cd11.mock.pstmn.io/companyInformation"
      )
      .then((result) => {
        setComponeyInfomation(result.data);
      })
      .catch((error) => console.error("에러 발생 : ", error));
  }, []);

  if (
    contents === null ||
    componeyInfomation === null ||
    concertDetailInformation === null ||
    castingCardContents == null
  ) {
    return <h1>웹서버로 부터 정보를 받고 있습니다...</h1>;
  }
  return (
    <div>
      <header className="headerContainer">
        <MainHeader></MainHeader>
      </header>
      <section className="appContainer">
        <article>
          <Summary contents={contents}></Summary>
          <Detail
            castingCardContents={castingCardContents}
            concertDetailInformation={concertDetailInformation}
            componeyInfomation={componeyInfomation}
          ></Detail>
        </article>
        <article>
          <Booking></Booking>
        </article>
        <div>
          <a href="#" className="topbutton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-bar-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </a>
        </div>
      </section>

      <footer style={{ display: "block" }}>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;
