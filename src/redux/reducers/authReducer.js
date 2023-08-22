import { readUser } from "../../service/localStorage";
import { LOGIN_SUCCESS } from "../authActionTypes";

const initialState = {
  user: readUser(),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
