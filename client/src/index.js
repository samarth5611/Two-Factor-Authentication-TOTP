import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Components/login";
import Register from "./Components/register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
