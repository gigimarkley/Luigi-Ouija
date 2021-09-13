import React from "react";
import store, { addCharacter } from "../store";

export const Letters = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function handleClick(event) {
    event.preventDefault();
    store.dispatch(addCharacter(event.target.value));
  }

  return (
    <div>
      {/* map through alphabet*/}
      {alphabet.map((letter, index) => {
        return (
          <button
            key={index}
            id="letterButtons"
            value={letter}
            onClick={handleClick}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};
export default Letters;
