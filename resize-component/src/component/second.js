import React from "react";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  margin: "15px",
};

const Second = () => {
  return (
    <Resizable
      style={style}
      defaultSize={{
        width: 800,
        height: 350,
      }}
    >
      Second Component
    </Resizable>
  );
};

export default Second;
