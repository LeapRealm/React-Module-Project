import React, { useState } from "react";
import "./Summary.css";
import Modal from "./Modal";

const Summary = ({ contents }) => {
  const {
    title,
    image,
    place,
    period,
    time,
    age,
    mainPrice,
    rPrice,
    sPrice,
    aPrice,
    bPrice,
  } = contents;

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="summaryWrapper">
      <h2 className="summaryTitle">{title}</h2>
      <img className="summaryImage" src={image} alt={title}></img>
      <table className="summaryTable">
        <tbody>
          <tr>
            <td>장소</td>
            <td className="button" colSpan="2" onClick={openModal}>
              {place} ▶
            </td>
          </tr>
          <tr>
            <td>공연기간</td>
            <td colSpan="2">{period}</td>
          </tr>
          <tr>
            <td>공연시간</td>
            <td colSpan="2">{time}</td>
          </tr>
          <tr>
            <td>관람연령</td>
            <td colSpan="2">{age}</td>
          </tr>
          <tr>
            <td className="priceLable" rowSpan="9">
              가격
            </td>
            <td className="mainPriceValue" colSpan="2">
              {mainPrice}
            </td>
          </tr>
          <tr>
            <td>R석</td>
            <td className="priceValue">{rPrice}</td>
          </tr>
          <tr>
            <td>S석</td>
            <td className="priceValue">{sPrice}</td>
          </tr>
          <tr>
            <td>A석</td>
            <td className="priceValue">{aPrice}</td>
          </tr>
          <tr>
            <td>B석</td>
            <td className="priceValue">{bPrice}</td>
          </tr>
        </tbody>
      </table>
      <Modal open={modalOpen} close={closeModal} header="공연장 정보">
        <p>예술의전당</p>
        <p>전화번호 : 02-580-1300</p>
        <p>도로명 주소: 서울시 서초구 남부순환로 2406 예술의전당</p>
        <p>지번 주소: 서울시 서초구 서초동 700번지</p>
      </Modal>
    </div>
  );
};

export default Summary;
