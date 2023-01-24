import React from 'react';
import { useParams } from 'react-router-dom';
import './RGB.css';


export default function RGB() {
  const { r, g, b } = useParams();
  return (
    <div style={{ backgroundColor:  }}>RGB</div>);
}
