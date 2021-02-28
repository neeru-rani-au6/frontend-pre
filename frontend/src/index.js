import React from "react";
import ReactDom from "react-dom";
import "./style/style.css";
import App from "./app";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
