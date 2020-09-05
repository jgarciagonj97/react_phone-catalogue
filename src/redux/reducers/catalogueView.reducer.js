import { TOOGLE_CATALOGUE_VIEW } from "../actions";

const INITIAL_STATE = {
    list: false,
};

const toogleCatalogueViewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOOGLE_CATALOGUE_VIEW:
            return {
                ...state,
                list: !state.list,
            };
        default:
            return state;
    }
};

export default toogleCatalogueViewReducer;