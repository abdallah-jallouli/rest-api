import { ADD_USERS, GET_USERS } from "./actionTypes";

const init = {
  loading: true,
  users: null,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case ADD_USERS : 
    return{
      ...state, 
      users : [...state.users, payload]
    }

    default:
      return state;
  }
};
