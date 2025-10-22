// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const location = useLocation();

//   const navItems = [
//     { label: 'Home', path: '/' },
//     { label: 'About', path: '/about' },
//     { label: 'Contact', path: '/contact' },
//     { label: 'Product', path: '/product' },
//   ];

//   return (
//     <nav className="navbar">
//       {navItems.map((item) => (
//         <Link
//           key={item.path}
//           to={item.path}
//           className={location.pathname === item.path ? 'active' : ''}
//         >
//           {item.label}
//         </Link>
//       ))}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Amr's Shop</div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/" onClick={toggleMenu}>Home</a></li>
        <li><a href="/about" onClick={toggleMenu}>About</a></li>
        <li><a href="/product" onClick={toggleMenu}>Products</a></li>
        <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

