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

const First = () => {
  return (
    <Resizable
      style={style}
      defaultSize={{
        width: 400,
        height: 350,
      }}
    >
      First Component
    </Resizable>
  );
};

export default First;
