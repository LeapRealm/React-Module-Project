import React from "react";
import "./CastingCard.css";
import "antd/dist/antd.css";
import { Card } from "antd";

const CastingCard = ({ castingCardContent }) => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 180 }}
        cover={
          <img
            alt={castingCardContent.realName}
            src={castingCardContent.image}
          />
        }
      >
        <Meta
          className="meta"
          title={castingCardContent.playName}
          description={castingCardContent.realName}
        />
      </Card>
    </div>
  );
};

export default CastingCard;
