import React from "react";

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
  return (
    <div>
      {/* map through alphabet*/}
      {alphabet.map((letter) => {
        return <button id="letterButtons">{letter}</button>;
      })}
    </div>
  );
};
export default Letters;
