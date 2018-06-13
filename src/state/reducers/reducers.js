import {
  SET_LOGIN_DATA,
  VERIFY_CODE_POST_HAS_ERROR,
  LOGIN_POST_HAS_ERROR,
  SET_IS_APP_LOADING
} from "../types";

const INITIAL_STATE = {
  id: undefined,
  status: undefined,
  email: undefined,
  password: undefined,
  name: undefined,
  first_name: undefined,
  second_name: undefined,
  phone: undefined,
  role: undefined
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGIN_DATA: {
      return {
        ...state,
        id: action.id,
        status: action.status,
        email: action.email,
        password: action.password,
        name: action.name,
        first_name: action.first_name,
        second_name: action.second_name,
        phone: action.phone,
        role: action.role
      };
    }
    default:
      return state;
  }
}
