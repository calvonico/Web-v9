import React, { Suspense } from "react";
import Loading from "./Loading";
import ReactDOM from "react-dom";
import "./nico-calvo.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// import i18n (needs to be bundled ;))
import './i18n';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
