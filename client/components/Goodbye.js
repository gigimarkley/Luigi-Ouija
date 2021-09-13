import React from "react";
import store, { goodbyeFunc } from "../store";
import { connect } from "react-redux";

export const Goodbye = (props) => {
  function handleClick(event) {
    event.preventDefault();
    store.dispatch(goodbyeFunc());
  }
  console.log("PROPS IN GOODBYE", props);
  return (
    <div>
      {/* goodbye button*/}
      <button id="goodbyeButton" onClick={handleClick}>
        Goodbye
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps)(Goodbye);
