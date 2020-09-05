import { url } from "../../utils/connection";
import { FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILED, FETCH_PHONES_PENDING, FETCH_ONE_PHONE_PENDING, FETCH_ONE_PHONE_SUCCESS, FETCH_ONE_PHONE_FAILED } from "../actions";


export const fetchAllPhones = () => (dispatch) => {
    dispatch({ type: FETCH_PHONES_PENDING });

    url.get("/phones")
        .then((res) => res)
        .then((data) =>
            dispatch({
                type: FETCH_PHONES_SUCCESS,
                payload: data.data,
            }).then((data) => console.log(data.data))
        )
        .catch((err) => dispatch({ type: FETCH_PHONES_FAILED, payload: err }));
};

export const fetchOnePhone = (id) => (dispatch) => {
    dispatch({ type: FETCH_ONE_PHONE_PENDING });

    url.get(`/${id}`)
        .then((res) => res)
        .then((data) =>
            dispatch({
                type: FETCH_ONE_PHONE_SUCCESS,
                payload: data.data,
            }).then((data) => console.log(data.data))
        )
        .catch((err) => dispatch({ type: FETCH_ONE_PHONE_FAILED, payload: err }));
};