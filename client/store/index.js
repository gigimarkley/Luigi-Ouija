import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//ACTION TYPES
const ADD_CHARACTER = "ADD_CHARACTER";
const REPLACE_MESSAGE = "REPLACE_MESSAGE";
const GOODBYEFUNC = "GOODBYEFUNC";

//ACTION CREATORS
export const addCharacter = (selectedCharacter) => ({
  type: ADD_CHARACTER,
  selectedCharacter,
});
export const replaceMessage = (selectedMessage) => ({
  type: REPLACE_MESSAGE,
  selectedMessage,
});
export const goodbyeFunc = () => ({
  type: GOODBYEFUNC,
});

const initialState = {
  message: "",
  selected: "",
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CHARACTER:
      if (state.selected.length === 1) {
        return {
          message: state.message + action.selectedCharacter,
          selected: action.selectedCharacter,
        };
      } else {
        return {
          message: action.selectedCharacter,
          selected: action.selectedCharacter,
        };
      }

    case REPLACE_MESSAGE:
      return {
        selected: action.selectedMessage,
        message: action.selectedMessage,
      };
    case GOODBYEFUNC:
      return { selected: "", message: "" };
    default:
      return state;
  }
};

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
