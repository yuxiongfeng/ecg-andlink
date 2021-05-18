import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import path from "./path"
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ReportListPage from "./page/report-list/"
import ReportDetail from './page/report-detail';
import Home from './page/Home'
import MeasurePage from './page/measure'

ReactDOM.render(
  <Router>
    <Switch>

      <Route path={path.reportList}>
      <ReportListPage/>
      </Route>

      <Route path={path.reportDetail} exact>
        <ReportDetail/>
      </Route>
      <Route path={path.measure} component={MeasurePage}>
      </Route>
  
      <Redirect to={path.measure}/>

    </Switch>
  </Router>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
