import React from 'react';
import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();
  console.log('hi');
  return <div style={{ backgroundColor: `rgb(${r},${g},${b})` }}>RGB</div>;
}
