import * as actionTypes from "../actionTypes";
import { IAction } from "../reducerInterface";
import filterState from "./filterState";

export default function filter(state: number = filterState, action: IAction) {
    switch (action.type) {
        case actionTypes.FILTER_ITEM:
            return action.data;
        default:
            return state;
    }
}