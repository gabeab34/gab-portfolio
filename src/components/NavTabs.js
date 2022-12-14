import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
 <ul className="nav nav-tabs">
  <div id ='myName'>
  <h1>Gabriel Adams Bogar</h1></div>
        <li className="nav-item">
          <a
            href="#About Me"
            onClick={() => handlePageChange('AboutMe')}

            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact/Resume
          </a>
        </li>
    
      </ul>
  );
}

export default NavTabs;
