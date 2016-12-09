import React from 'react';
import Image from '../Image/Image.component';
import spin from './spin.svg';

const Loading = () => ((
  <Image className='uk-align-center uk-margin-large-top' src={spin} width={90}/>
));

export default Loading;
