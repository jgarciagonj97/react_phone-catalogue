import { FETCH_PHONES_PENDING, FETCH_PHONES_SUCCESS, FETCH_PHONES_FAILED, FETCH_ONE_PHONE_PENDING, FETCH_ONE_PHONE_SUCCESS, FETCH_ONE_PHONE_FAILED } from "../actions";

const INITIAL_STATE = {
    phoneList: [],
    isFetching: false,
    errors: "",
};

export const fetchPhonesReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_PHONES_PENDING:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_PHONES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                phoneList: action.payload,
            };
        case FETCH_PHONES_FAILED:
            return {
                ...state,
                isFetching: false,
                errors: action.payload,
            };
        default:
            return state;
    }
};

export const fetchOnePhoneReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ONE_PHONE_PENDING:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_ONE_PHONE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                phone: action.payload,
            };
        case FETCH_ONE_PHONE_FAILED:
            return {
                ...state,
                isFetching: false,
                errors: action.payload,
            };
        default:
            return state;
    }
};
