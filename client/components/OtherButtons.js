import React from "react";
import store, { replaceMessage } from "../store";
import { connect } from "react-redux";

export const OtherButtons = (props) => {
  const otherbtns = ["Yes", "No", "Luigi", "Mario"];

  function handleClick(event) {
    event.preventDefault();
    store.dispatch(replaceMessage(event.target.value));
  }
  console.log("PROPS IN OTHER BUTTONS", props);
  return (
    <div>
      {/* map through other buttons*/}
      {otherbtns.map((button, index) => {
        return (
          <button
            key={index}
            id="otherButtons"
            value={button}
            onClick={handleClick}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps)(OtherButtons);
