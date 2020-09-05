import { combineReducers } from "redux";
import { fetchPhonesReducer, fetchOnePhoneReducer } from "./reducers/fetchPhones.reducer";
import toogleCatalogueViewReducer from "./reducers/catalogueView.reducer";

const rootReducer = combineReducers({
    PhonesList: fetchPhonesReducer,
    Phone: fetchOnePhoneReducer,
    View: toogleCatalogueViewReducer,
});
export default rootReducer;