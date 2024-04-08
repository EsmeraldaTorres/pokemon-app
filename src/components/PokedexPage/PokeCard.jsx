import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import "./style/PokeCard.css";

const PokeCard = ({ pokemonInfo }) => {
  const [pokemon, getPokemon] = useFetch(pokemonInfo.url);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(pokemonInfo.url, "pokemonInfo");
  }, [pokemonInfo]);
  const handlePokeDetail = () => {
    navigate(`/pokedex/${pokemonInfo.name}`);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <article
      className={`card border__${pokemon?.types[0].type.name}`}
      onClick={handlePokeDetail}
    >
      <header className={`card__header bg__${pokemon?.types[0].type.name}`}>
        <img
          className="card__img"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section className="card__principal">
        <h3 className={`card__name color__${pokemon?.types[0].type.name}`}>
          {pokemon?.name}
        </h3>
        <ul className="card__types">
          {pokemon?.types.map((typeInfo) => (
            <li className="card__type" key={typeInfo.type.url}>
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
      </section>
      <hr className="card__hr" />
      <section className="card__stats">
        <ul className="card__list">
          {pokemon?.stats.map((statInfo) => (
            <li className="card__stat" key={statInfo.stat.url}>
              <span className="card__stat__label">{statInfo.stat.name}</span>
              <span
                className={`card__stat__value  color__${pokemon?.types[0].type.name}`}
              >
                {statInfo.base_stat}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;
