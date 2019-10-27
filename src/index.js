import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const userList = [
  { id: 2341132, email: "sayginguven@gmail.com", password: "saygin_secret" },
  { id: 5212356, email: "mali@bayhan.net", password: "mali_secret" },
  { id: 8123611, email: "semih.temel@gmail.com", password: "semih_secret" }
];

ReactDOM.render(<App users={userList} />, document.getElementById("root"));
