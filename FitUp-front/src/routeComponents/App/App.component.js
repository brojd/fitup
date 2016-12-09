import React, { Component, PropTypes } from 'react';
import appStyles from './App.stylesheet.css';
import headerStyles from '../../components/Header/Header.stylesheet.css';
import Header from '../../components/Header/Header.component';
import Image from '../../components/Image/Image.component';
import NavBar from '../../components/NavBar/NavBar.component';
import SlideshowContainer from '../../components/Slideshow/SlideshowContainer.component';
import slides from './slides';
import logo from './images/logo_header.png';

class App extends Component {
  render() {
    return (
      <div className={appStyles.App}>
        <Header>
          <Image src={logo}
                 height={60}
                 width={78}
                 className={headerStyles.headerLogo} />
          <NavBar className="uk-align-center"/>
        </Header>
        <SlideshowContainer slides={slides}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
