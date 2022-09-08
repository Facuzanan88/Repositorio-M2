import React, { useState } from "react";

export default function SearchBar({onSearch}) {
const [city, setCity] = useState('');

function handleInputChange(e) {
  setCity(e.target.value);
}

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={handleInputChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
