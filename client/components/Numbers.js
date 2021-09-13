import React from "react";
import store, { addCharacter } from "../store";

export const Numbers = () => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  function handleClick(event) {
    event.preventDefault();
    store.dispatch(addCharacter(event.target.value));
  }

  return (
    <div>
      {/* map through 0-9*/}
      {nums.map((number, index) => {
        return (
          <button
            key={index}
            id="numButtons"
            value={number}
            onClick={handleClick}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
};
export default Numbers;
