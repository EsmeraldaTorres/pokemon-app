import React from "react";
import FormTrainer from "../components/HomePage/FormTrainer";
import "./styles/HomePage.css";
import logoPokemon from "../../public/assets/images/logopokemon.png";
const HomePage = () => {
  return (
    <div className="home__container">
      <div>
        <div className="logo__container">
          <img
            src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hB7dzZAJRlHbv5ZMo~FRvI0UYyxCyjwtb202bTn-0VeFuJjhHKvn03s2bxujS~5MmS8uKcKA07IFISPNNy7v8BO2NoE-vet0dybYqt17js-tMyhWCMsWzDh4-c-jaHZF6LJ-He1IqmyjerZpxF2FirwqAEIi3PeKnSUWXdeWMnzKAKjxK3LA91aKRjfQ6VAuHGOl9NNXC~Y7uvghQrm71nbXu5OX2i3w07vF~mbZAPtzFkG1jEusbXBvBlLC6kZXM3PV9WbwyC2an30vro~t19BRD4hCa6z-zPCchWur98IHz5sWZkj6b548Sw8z-NehSEbWLrj-1PXWr3lEJhorwg__"
            alt=""
          />
        </div>
        <h2 className="trainer__title">¡Hola entrenador!</h2>
        <p className="trainer__text">Para comenzar, escribe tu nombre</p>
        <FormTrainer />
      </div>
      <div className="rectangle">
        <img className="logo__pokedex" src={logoPokemon} alt="" />
        <div className="rectangle__red"> </div>
        <div className="rectangle__black"> </div>
      </div>
    </div>
  );
};

export default HomePage;
