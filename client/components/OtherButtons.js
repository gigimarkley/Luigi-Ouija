import React from "react";

export const OtherButtons = () => {
  const otherbtns = ["Yes", "No", "Luigi", "Mario"];
  return (
    <div>
      {/* map through other buttons*/}
      {otherbtns.map((button) => {
        return <button id="otherButtons">{button}</button>;
      })}
    </div>
  );
};
export default OtherButtons;
