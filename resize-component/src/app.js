import React, { Component } from "react";
import First from "./component/first";
import Second from "./component/second";
import Third from "./component/third";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <First />
          <Second />
        </div>
        <Third />
      </div>
    );
  }
}

export default App;
