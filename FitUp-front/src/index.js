import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import App from './routeComponents/App/App.component';
import Location from './routeComponents/Location/Location.component';
import OuterSchedule from './routeComponents/OuterSchedule/OuterSchedule.component';
import OuterGyms from './routeComponents/OuterGyms/OuterGyms.component';
import OuterTrainers from './routeComponents/OuterTrainers/OuterTrainers.component';
import CalculatorBMI from './routeComponents/CalculatorBMI/CalculatorBMI.component';
import '../public/global_styles/app.global.css';
import { browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route component={Location}>
        <IndexRoute component={OuterSchedule} />
        <Route path='gyms' component={OuterGyms} />
        <Route path='trainers' component={OuterTrainers} />
        <Route path='bmi' component={CalculatorBMI} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
