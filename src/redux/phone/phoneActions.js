import axios from "axios";

import { FETCH_PHONES_REQUEST, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILURE } from "./phoneTypes";

//Creators
export function fetchPhonesRequest() {
  return {
    type: FETCH_PHONES_REQUEST
  };
}

export function fetchPhonesSuccess(phones) {
  return {
    type: FETCH_PHONES_SUCCESS,
    payload: phones
  };
}

export function fetchPhonesFailure(error) {
  return {
    type: FETCH_PHONES_FAILURE,
    payload: error
  };
}


export const fetchPhones = () => {
  return dispatch => {
    dispatch(fetchPhonesRequest());
    axios.get("http://localhost:4000/api/phones")
      .then(response => {
        const phones = response.data;
        dispatch(fetchPhonesSuccess(phones));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchPhonesFailure(errorMessage));
      });
  };
};
