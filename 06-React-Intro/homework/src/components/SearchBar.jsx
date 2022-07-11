import React from 'react';

import style from './SearchBar.module.css';

import { BiSearchAlt, BiMapPin } from "react-icons/bi";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <form className={style.searchbar} onSubmit={(e) => {
      e.preventDefault();
      const input = document.getElementById('cityInput');
      onSearch(input.value);
      input.value = '';
    }}>
      <BiMapPin className={style.icon} />
      <input id="cityInput" className={style.input} placeholder="Ciudad..." />
      <button className={style.submit} type="submit">
        <BiSearchAlt />
      </button>
    </form>
  );
}