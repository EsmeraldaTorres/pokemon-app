import React from "react";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "../../pages/styles/PokedexPage.css";

const SelectType = ({ setTypeSelected }) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getTypes] = useFetch(url);

  useEffect(() => {
    getTypes();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value, "value");
    setTypeSelected(e.target.value);
  };
  return (
    <select className="select__pokemons" onChange={handleChange}>
      <option value="allPokemons">All pokemons</option>
      {types?.results.map((typeInfo) => (
        <option key={typeInfo?.url} value={typeInfo?.url}>
          {typeInfo?.name}
        </option>
      ))}
    </select>
  );
};

export default SelectType;
