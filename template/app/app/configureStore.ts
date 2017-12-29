import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/indexReducer";

export default function configureStore(initialState: any) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}