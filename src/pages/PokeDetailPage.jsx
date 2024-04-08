import React, { useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import PokeDetailCard from "../components/PokeDetailPage/PokeDetailCard";
import Header from "../components/Header";
import "../pages/styles/PokeDetailPage.css";

const PokeDetailPage = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [url]);

  useEffect(() => {
    console.log(pokemon, "pokemon");
  }, []);
  return (
    <div>
      <Header />
      <div className="container__card__details">
        <article className="card__detail">
          <header
            className={`card__header__detail bg__${pokemon?.types[0].type.name}`}
          >
            <img
              className="img__card__detail"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>
          <section className="card__principal__details">
            <div className="card__id__details">#{pokemon?.id}</div>
            <div className="info__card__details">
              <div className="container__name__card__details">
                <span className="w-35 name__lines">
                  <hr className="hr__card__detail" />
                </span>
                <span className="w-35 ">
                  <h3
                    className={`card__name__details color__${pokemon?.types[0].type.name}`}
                  >
                    {pokemon?.name}
                  </h3>
                </span>
                <span className="w-35 name__lines">
                  <hr className="hr__card__detail" />
                </span>
              </div>
              <div className="weight__height__info">
                <div className="weight">
                  <p className="label">Peso</p>
                  <p className="value">{pokemon?.weight}</p>
                </div>
                <div className="height">
                  <p className="label">Altura</p>
                  <p className="value">{pokemon?.height}</p>
                </div>
              </div>
              <div className="skills__and__types__container">
                <div className="types__container">
                  <div className="type__label__container">Tipo</div>
                  <div className="display-flex">
                    {pokemon?.types.map((pokeType) => (
                      <div className={`types__box bg__${pokeType?.type.name}`}>
                        {pokeType.type.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skills__container">
                  <div className="type__label__container">Habilidades</div>
                  <div className="display-flex">
                    {pokemon?.abilities.map((pokeAbility) => (
                      <div className="ability__box">
                        {pokeAbility.ability.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="stats__container">
                <div className="stats__principal__title">
                  Stats{" "}
                  <span className="w-100 ">
                    <hr className="card__hr" />
                  </span>
                </div>
                <div className="container__stats__progress">
                  {pokemon?.stats.map((pokeStat) => (
                    <>
                      <div className="margin-y">
                        <div className="container_info__stats">
                          <label for="file">{pokeStat.stat.name}</label>{" "}
                          <span>{pokeStat.base_stat}/150</span>
                        </div>
                        <div className="progress__bar__stats">
                          <div
                            className="value__progress__bar"
                            style={{ width: `${pokeStat.base_stat}%` }}
                          ></div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </article>
        <article className="card__detail__movements">
          <div className="info__card__details">
            <div className="movements__container">
              <div className="movements__principal__title">
                Movements{" "}
                <span className="w-100 ">
                  <hr className="card__hr" />
                </span>
              </div>
            </div>
            <div className="movements">
              {pokemon?.moves.map((movement) => (
                <div className="movement">{movement.move.name}</div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PokeDetailPage;
