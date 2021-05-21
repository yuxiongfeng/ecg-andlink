import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import path from "./path"
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ReportListPage from "./page/report-list/"
import ReportDetail from './page/report-detail';
import MeasurePage from './page/measure'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path={path.reportList} component={ReportListPage}/>
      <Route path={path.reportDetail} component={ReportDetail} exact/>
      <Route path={path.measure} component={MeasurePage}/>
      <Redirect to={path.measure}/>
    </Switch>
  </Router>
    ,
  document.getElementById('root')
);
reportWebVitals();
