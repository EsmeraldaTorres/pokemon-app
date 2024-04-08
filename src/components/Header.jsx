import React from "react";
import logoPokemon from "../../public/assets/images/logopokemon.png";

const Header = () => {
  return (
    <div className="rectangle__header">
      <img
        className="pokedex__header"
        src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hB7dzZAJRlHbv5ZMo~FRvI0UYyxCyjwtb202bTn-0VeFuJjhHKvn03s2bxujS~5MmS8uKcKA07IFISPNNy7v8BO2NoE-vet0dybYqt17js-tMyhWCMsWzDh4-c-jaHZF6LJ-He1IqmyjerZpxF2FirwqAEIi3PeKnSUWXdeWMnzKAKjxK3LA91aKRjfQ6VAuHGOl9NNXC~Y7uvghQrm71nbXu5OX2i3w07vF~mbZAPtzFkG1jEusbXBvBlLC6kZXM3PV9WbwyC2an30vro~t19BRD4hCa6z-zPCchWur98IHz5sWZkj6b548Sw8z-NehSEbWLrj-1PXWr3lEJhorwg__"
        alt=""
      />
      <img className="logo__pokedex__header" src={logoPokemon} alt="" />
      <div className="rectangle__red"> </div>
      <div className="rectangle__black"> </div>
    </div>
  );
};
export default Header;
