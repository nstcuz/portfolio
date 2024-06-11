import React, { useState } from 'react';
import BouncingItem from './BouncingItem';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);

  };

  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item" onClick={toggleDropdown}>
            Projects
            {isDropdownOpen && (
              <div className="projects-dropdown">
                  <div className="bouncing-item-container">
                    <BouncingItem key={isDropdownOpen ? 'open' : 'closed'} />
                  </div>
                <ul className="dropdown">
                  <li className="nav-item">JavaScript Game</li>
                  <li className="nav-item">Movie Database</li>
                  <li className="nav-item">Portfolio Site</li>
                  <li className="nav-item">Capstone Project</li>
                </ul>
              </div>
            )}
          </li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
