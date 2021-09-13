import React from "react";
import Letters from "./Letters";
import Numbers from "./Numbers";
import OtherButtons from "./OtherButtons";
import Goodbye from "./Goodbye";

export const Buttons = () => {
  return (
    <div>
      <Letters />
      <Numbers />
      <OtherButtons />
      <Goodbye />
    </div>
  );
};
export default Buttons;
