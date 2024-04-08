import React from "react";
import PokeCard from "./PokeCard";

const ListPokemons = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <div className="cards__container">
      {pokemons?.length != 0 ? (
        pokemons?.map((pokemon) => (
          <PokeCard key={pokemon.url} pokemonInfo={pokemon} />
        ))
      ) : (
        <>
          <div>No hay resultados</div>
        </>
      )}
    </div>
  );
};

export default ListPokemons;
