import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainTemplate from "./components/MainTemplate";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={MainTemplate}></Route>
          <Route exact path="/musical" component={App}></Route>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
