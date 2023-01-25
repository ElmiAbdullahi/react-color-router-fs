import React from 'react';
import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();
  return (
    <main className="RGB" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <h2 className="rgb">{`rgb(${r},${g},${b})`}</h2>
    </main>
  );
}
