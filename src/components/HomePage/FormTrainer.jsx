import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setTrainer } from "../../store/states/trainer.slice";
import "../../pages/styles/HomePage.css";

const FormTrainer = () => {
  const [helper, setHelper] = useState(false);
  const trainerInput = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(trainerInput.current.value.trim());
    if (
      trainerInput.current.value.trim() === "" ||
      trainerInput.current.value.length < 3
    ) {
      setHelper(true);
    } else {
      dispatch(setTrainer(trainerInput.current.value.trim()));
      navigate("/pokedex");
    }
  };
  return (
    <>
      <form className="input__container" onSubmit={handleSubmit}>
        <input
          onChange={() => {
            setHelper(false);
          }}
          className="input__trainer"
          ref={trainerInput}
          type="text"
          placeholder="Tu nombre..."
        />
        <button className="btn__comenzar">Comenzar</button>
      </form>
      <div
        className={`helper__text__trainer__empty ${
          helper && "display-initial"
        }`}
      >
        <p> Introduce 3 o más letras en tu nombre de entrenador</p>
      </div>
    </>
  );
};

export default FormTrainer;
