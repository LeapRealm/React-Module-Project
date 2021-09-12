import React from "react";
import "./Casting.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import CastingCard from "./CastingCard";

const style = { padding: "8px 0" };

const Casting = ({ castingCardContents }) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {castingCardContents.map((castingCardContent, index) => (
          <Col key={index} className="gutter-row" span={6}>
            <div key={index} style={style}>
              <CastingCard
                key={index}
                castingCardContent={castingCardContent}
              ></CastingCard>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Casting;
