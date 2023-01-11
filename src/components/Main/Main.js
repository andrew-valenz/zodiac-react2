import React from 'react';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import zodiac from '../../data.js';

export default function Main() {
  return (
    <main style={{}}>
      {zodiac.map((sign) => (
        <ZodiacCard key={sign.id} {...sign} />
      ))}
      ;
    </main>
  );
}
