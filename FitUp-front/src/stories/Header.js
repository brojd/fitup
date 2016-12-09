import React from 'react';
import { storiesOf} from '@kadira/storybook';
import Header from '../components/Header/Header.component';
import headerStyles from '../components/Header/Header.stylesheet.css';
import NavBar from '../components/NavBar/NavBar.component';
import Image from '../components/Image/Image.component';

storiesOf('Header', module)
  .add('header with navbar and logo', () => (
    <Header>
      <Image src='https://s22.postimg.org/hx1k588kx/Logomakr_4x27d_Q.png' alt='logo' height={50} width={68}
             className={headerStyles.headerLogo} />
      <NavBar />
    </Header>
  ));
