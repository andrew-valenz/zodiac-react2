import React from 'react';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';
import zodiac from '../../data.js';
import background from '../../Background.png';

export default function Main() {
  return (
    <main style={{ background: `url("${background}")` }}>
      <div className="zodiac-container">
        {zodiac.map((sign) => (
          <ZodiacCard key={sign.id} {...sign} />
        ))}
        ;
      </div>
    </main>
  );
}
