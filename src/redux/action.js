import { LOGIN_SUCCESS } from "./authActionTypes";

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};
