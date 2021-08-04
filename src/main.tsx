import React from "react";
import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";

import DefaultLayout from "./features/defaultLayout/DefaultLayout";
import Report from "./features/report/Report";

import store from "./store";

import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <div className="container">
      <Router>
        <DefaultLayout>
          <Switch>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/home">home</Route>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/home" />;
              }}
            />
          </Switch>
        </DefaultLayout>
      </Router>
    </div>
  </Provider>,
  document.getElementById("root")
);
