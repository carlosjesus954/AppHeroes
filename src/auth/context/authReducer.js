import { types } from "../types/types";
// const initialState = {

// }

export const authReducer = (state={}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      };
      break;

    case types.logout:
      return{
        logged: false,
        
      };

    default:
      return state;
      break;
  }
};
