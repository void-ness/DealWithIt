import React from 'react';
import './styles.css';
import Emptygif from './empty.gif';

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={Emptygif} alt='Deal with It - empty' />
  </div>
);

export default EmptyList;
