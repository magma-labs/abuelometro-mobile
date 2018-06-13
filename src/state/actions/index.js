import {
  SET_LOGIN_DATA,
  VERIFY_CODE_POST_HAS_ERROR,
  LOGIN_POST_HAS_ERROR,
  SET_IS_APP_LOADING
} from "../types";

export function SaveUserData(data) {
  return {
    type: SET_LOGIN_DATA,
    id: data.id,
    status: data.status,
    email: data.email,
    password: data.password,
    name: data.name,
    first_name: data.first_name,
    second_name: data.second_name,
    phone: data.phone,
    role: data.role
  };
}

export const setIsAppLoading = isLoading => {
  return {
    type: SET_IS_APP_LOADING,
    payload: isLoading
  };
};

export const isCodeIncorrect = isIncorrect => {
  return {
    type: VERIFY_CODE_POST_HAS_ERROR,
    payload: isIncorrect
  };
};

export const loginPostHasError = hasError => {
  return {
    type: LOGIN_POST_HAS_ERROR,
    payload: hasError
  };
};

export function postLoginData(email, password) {
  return async dispatch => {
    dispatch(setIsAppLoading(true));

    try {
      const response = await axios({
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        url: "https://...",
        data: {
          email: email,
          password: password
        }
      });

      if (response.data.status === "successful") {
        dispatch(isCodeIncorrect(false));
        dispatch(SaveUserData({ ...response }));
      } else if (response.data.status === "error") {
        dispatch(isCodeIncorrect(true));
      }

      dispatch(loginPostHasError(false));
      dispatch(setIsAppLoading(false));
    } catch (error) {
      dispatch(loginPostHasError(true));
      dispatch(setIsAppLoading(false));
    }
  };
}

export function postToGetGranpaList() {
  return async dispatch => {
    const { id } = getState().reducers;

    dispatch(setIsAppLoading(true));

    try {
      const response = await axios({
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        url: "https://...",
        data: {
          id: id
        }
      });

      if (response.data.status === "successful") {
        dispatch(isCodeIncorrect(false));
        dispatch(SaveUserData({ ...response }));
      } else if (response.data.status === "error") {
        dispatch(isCodeIncorrect(true));
      }

      dispatch(loginPostHasError(false));
      dispatch(setIsAppLoading(false));
    } catch (error) {
      dispatch(loginPostHasError(true));
      dispatch(setIsAppLoading(false));
    }
  };
}
