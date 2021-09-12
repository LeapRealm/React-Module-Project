import React, { useState } from "react";
import "./SeatElement.css";

const SeatElement = ({ get, set, number }) => {
  const [checked, setChecked] = useState(false);

  const onClick = (e) => {
    if (checked) {
      setChecked(!checked);
      set(get() + 1);
    } else {
      if (get() > 0) {
        setChecked(!checked);
        set(get() - 1);
      }
    }
    
  };

  return (
    <div
      className={
        checked
          ? "box checked"
          : number <= 10
          ? "box R"
          : number <= 20
          ? "box S"
          : number <= 30
          ? "box A"
          : number <= 60
          ? "box B"
          : "box None"
      }
      onClick={onClick}
    >
      {number}
    </div>
  );
};

export default SeatElement;
