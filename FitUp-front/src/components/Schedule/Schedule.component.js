import React, { PropTypes } from 'react';
import styles from './Schedule.stylesheet.css';

const Schedule = (props) => ((
  <div className={styles.scheduleWrapper}>
    <div className="uk-width-8-10 fadeInUp uk-align-center">
      <div id="scheduler_here" className="dhx_cal_container uk-width-10-10" style={{height:1000}}>
        <div className="dhx_cal_navline">
          <div className="dhx_cal_prev_button">&nbsp;</div>
          <div className="dhx_cal_next_button">&nbsp;</div>
          <div className="dhx_cal_today_button"></div>
          <div className="dhx_cal_date"></div>
          <div className="dhx_cal_tab" name="day_tab" style={{right:204}}></div>
          <div className="dhx_cal_tab" name="week_tab" style={{right:140}}></div>
        </div>
        <div className="dhx_cal_header"></div>
        <div className="dhx_cal_data"></div>
      </div>
    </div>
    {props.children}
  </div>
));

Schedule.propTypes = {
  children: PropTypes.element
};

export default Schedule;
