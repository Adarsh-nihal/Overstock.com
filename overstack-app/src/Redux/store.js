import {legacy_createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {reducer as AuthReducer }from "./AuthReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(AuthReducer,composeEnhancers(applyMiddleware(thunk)));


export {store};
