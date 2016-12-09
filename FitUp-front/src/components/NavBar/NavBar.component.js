import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import styles from './NavBar.stylesheet.css';

class NavBar extends Component {
  
  markAsVisited(elem) {
    let allNavAnchors = document.querySelectorAll(`.${styles.navList__anchor}`);
    for (let anchor of allNavAnchors) {
      anchor.className = styles.navList__anchor;
    }
    elem.target.className = `${styles.navList__anchor} ${styles.currentTab}`;
  }
  
  render() {
    return (
      <nav className={classNames('uk-width-10-10',  styles.NavBar)}>
        <ul className={classNames('uk-navbar-nav uk-hidden-small uk-align-center', styles.navList, this.props.className)}>
          <li className={styles.navList__elem}>
            <Link to='/'
                  className={`${styles.navList__anchor}`}
                  onClick={this.markAsVisited}>
              schedule
            </Link>
          </li>
          <li className={styles.navList__elem}>
            <Link to='gyms'
                  className={styles.navList__anchor}
                  onClick={this.markAsVisited}>
              gyms
            </Link>
          </li>
          <li className={styles.navList__elem}>
            <Link to='trainers'
                  className={styles.navList__anchor}
                  onClick={this.markAsVisited}>
              trainers
            </Link>
          </li>
          <li className={styles.navList__elem}>
            <Link to='bmi'
                  className={styles.navList__anchor}
                  onClick={this.markAsVisited}>
              BMI calculator
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

NavBar.propTypes = {
  className: PropTypes.string
};

export default NavBar;
