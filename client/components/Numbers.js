import React from "react";

export const Numbers = () => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      {/* map through 0-9*/}
      {nums.map((number) => {
        return <button id="numButtons">{number}</button>;
      })}
    </div>
  );
};
export default Numbers;
