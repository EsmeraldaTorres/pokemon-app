import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ListPokemons from "../components/PokedexPage/ListPokemons";
import useFetch from "../hooks/useFetch";
import SelectType from "../components/PokedexPage/SelectType";
import "../pages/styles/HomePage.css";
import "../pages/styles/PokedexPage.css";
import logoPokemon from "../../public/assets/images/logopokemon.png";
import Header from "../components/Header";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState("");
  // const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  const [typeSelected, setTypeSelected] = useState("allPokemons");
  const inputSearch = useRef();
  const trainer = useSelector((states) => states.trainer);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  const [pokemons, getPokemons, getPokeByType] = useFetch(url);

  useEffect(() => {
    console.log(typeSelected, "entro aqui");

    if (typeSelected === "allPokemons") {
      console.log(typeSelected, "entro al if typeSelected");
      getPokemons();
    } else {
      console.log(typeSelected, "entro al else typeSelected");

      getPokeByType(typeSelected);
    }
    console.log("entro aqui");
  }, [typeSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputSearch.current.value.trim().toLowerCase(), "inputSearch");
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const pokemonsFiltered = pokemons?.results?.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  return (
    <div className="pokedex__page__container">
      <Header />
      <div className="pokedex__page__container__cards">
        <p>
          <span className="red-text"> Bienvenido</span>{" "}
          <span className="red-text">{trainer}</span>
          <span className="red-text">,</span> aquí podrás encontrar tu
          entrenador favorito
        </p>
        <div className="input__and__select__container">
          <form onSubmit={handleSubmit}>
            <input
              className="input__search"
              ref={inputSearch}
              type="text"
              placeholder="Search a pokemon"
            />
            <button className="btn__search">Search</button>
          </form>
          <SelectType setTypeSelected={setTypeSelected} />
        </div>
        <ListPokemons pokemons={pokemonsFiltered} />
      </div>
    </div>
  );
};

export default PokedexPage;
