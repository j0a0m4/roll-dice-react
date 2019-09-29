import React from 'react';
import getDiceIcon from '../utils/getDiceIcon';
import '../styles/Die.css';

const Die = ({ value, classStyle }) => {
  const diceIcon = getDiceIcon(value);
  return <div className={`${classStyle} Die`}>{diceIcon}</div>;
};

export default Die;
