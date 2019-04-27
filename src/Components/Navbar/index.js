import React from 'react';
import './style.css';

const Navbar = props => <nav className="navbar navbar-light bg-light clickyNav">{props.children}</nav>

export default Navbar;