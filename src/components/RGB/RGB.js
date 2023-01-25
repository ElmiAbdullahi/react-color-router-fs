import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound.js';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();

  if ((isNaN(r) || isNaN(g) || isNaN(b) || r, b, g > 255)) {
    return <NotFound />;
  }

  return (
    <main className="RGB" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <h2 className="rgb">{`rgb(${r},${g},${b})`}</h2>
    </main>
  );
}
