import React from "react";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  margin:"10px"
};

const Third = () => {
  return (
    <Resizable
      style={style}
      defaultSize={{
        width: 1250,
        height: 230,
      }}
    >
      Third Component
    </Resizable>
  );
};

export default Third;
