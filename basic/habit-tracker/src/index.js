import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/simpleHabit";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ReactDom이라는 라이브러리를 이용해서
// root라는 아이디를 가진 요소와 최상위 component를 연결해주는 작업
root.render(
  <React.StrictMode>
    <App />
    {/* <SimpleHabit /> */}
  </React.StrictMode>
  // document.getElementById("root")
);
