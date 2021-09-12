import React from "react";
import "./Detail.css";
import Casting from "./Casting";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import UserComment from "./UserComment";

const Detail = ({
  castingCardContents,
  concertDetailInformation,
  componeyInfomation,
}) => {
  const { TabPane } = Tabs;

  return (
    <div className="tabGroup">
      <Tabs defaultActiveKey="1">
        <TabPane tab="공연정보" key="1">
          <div className="detailContentTitle">
            <b>공연시간 정보</b>
          </div>
          {concertDetailInformation.map((info, index) => (
            <p className="infoText" key={index}>
              {info.content}
            </p>
          ))}
          <h2 className="detailContentTitle">
            <b>공연상세 / 캐스팅일정</b>
          </h2>
          <img
            src="https://user-images.githubusercontent.com/43628076/132981308-223511c7-6979-4fa6-9d1f-be8c8b29efe7.jpg"
            alt="공연상세와 캐스팅일정"
          ></img>
        </TabPane>
        <TabPane tab="캐스팅정보" key="2">
          <Casting castingCardContents={castingCardContents}></Casting>
        </TabPane>
        <TabPane tab="부가정보" key="3">
          <div className="detailContentTitle">
            <b>기획사 정보</b>
          </div>
          {componeyInfomation.map((info, index) => (
            <p className="infoText" key={index}>
              {info.content}
            </p>
          ))}
          <div className="detailContentTitle">
            <b>티켓 수령 안내</b>
          </div>
          <p style={{ fontWeight: "bold" }}>예약 번호 입장</p>
          <p className="infoText">
            ⦁ 공연 당일 현장 교부처에서 예약번호 및 본인 확인 후 티켓을 수령하실
            수 있습니다.
          </p>
          <p className="infoText">
            ⦁ 상단 예매확인/취소 메뉴에서 예매내역을 프린트하여 가시면
            편리합니다.
          </p>
          <p style={{ fontWeight: "bold" }}>티켓배송</p>
          <p className="infoText">
            ⦁ 예매완료(결제익일) 기준 4~5일 이내에 배송됩니다. (주말, 공휴일을
            제외한 영업일 기준)
          </p>
          <p className="infoText">
            ⦁ 배송 중 전달 불가사항이 발생할 시에는 반송되며, 본인 수령 불가 시
            경우에 따라 대리 수령도 가능합니다.
          </p>
          <p className="infoText">
            ⦁ 공연 3일 전까지 티켓을 배송받지 못하신 경우 고객센터(1544-1555)로
            연락 주시기 바랍니다.
          </p>
          <p className="infoText">
            ⦁ 반송이 확인되지 않은 티켓은 현장에서도 수령하실 수 없으며, 공연
            관람 및 환불이 불가합니다.
          </p>
          <p className="infoText">
            ⦁ 티켓 배송 (배송상태 : 배송 준비중 이후) 후에는 주소 변경이
            불가합니다.
          </p>
          <p className="infoText">
            ⦁ 부득이하게 주소 변경이 필요하신 경우 각 배송사에 수취 거절 요청
            후, 고객센터(1544-1555)로 재배송 신청할 수 있습니다.
          </p>
        </TabPane>
        <TabPane tab="기대평" key="4">
          <div className="detailContentTitle">
            <b>꼭 읽어주세요</b>
          </div>
          <p className="infoText">
            게시판 운영 규정에 어긋난다고 판단되는 게시글은 사전 통보없이
            블라인드 처리될 수 있습니다.
          </p>
          <p className="infoText">
            특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 이메일등의
            개인정보는 악용될 우려가 있으므로 게시를 삼가 주시기 바랍니다.
          </p>
          <UserComment></UserComment>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Detail;
