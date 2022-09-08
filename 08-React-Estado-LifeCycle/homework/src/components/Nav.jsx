import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import texto from './Nav.css';

function Nav({onSearch}) {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <img src={Logo} alt=''/>
     <span className="texto"> Weather - Henry App </span>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
