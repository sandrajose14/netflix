

import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  return (
    <div className={`nav ${show && 'nav-black'}`}>
      <img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
    </div>
  );
}

export default Navbar;
