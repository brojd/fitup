import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Header.stylesheet.css';


class Header extends React.Component {
  constructor() {
    super();
    this._handleScroll = this._handleScroll.bind(this);
    this.state = {
      headerFixed: false
    };
  }
  _handleScroll() {
    if (window.scrollY > 150) {
      this.setState({headerFixed: true});
    } else if (window.scrollY < 3) {
      this.setState({headerFixed: false});
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
  }
  render() {
    return (
      <header className={classNames('uk-width-10-10', styles.Header, this.props.className,
                        {[styles.fixedHeader]: this.state.headerFixed}, {'slideInDown': this.state.headerFixed})}>
        <div className='childrenWrapper'>
          { this.props.children }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
  children: React.PropTypes.node
};

export default Header;
