import React from 'react';
import './ZodiacCard.css';

export default function zodiacCard(props) {
  return (
    <div className="zodiac">
      <img src={`./Images/${props.name}.png`}></img>
      <h3 className="name">{props.name}</h3>
      <p className="dates">{props.dates}</p>
      <p className="symbol">{props.symbol}</p>
    </div>
  );
}
