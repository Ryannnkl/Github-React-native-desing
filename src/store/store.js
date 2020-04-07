import { createStore } from "redux";

const INITIAL_STATE = {
  user: {},
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    default:
      return state;
  }
}

const store = createStore(user);

export default store;
