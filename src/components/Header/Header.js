import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <NavLink to="/rgb/225/0/0">Red</NavLink>
      <NavLink to="/rgb/255/0/255">Purple</NavLink>
      <NavLink to="/rgb/255/255/0">Yellow</NavLink>
    </header>
  );
}
