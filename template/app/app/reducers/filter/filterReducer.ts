import * as actionTypes from "../actionTypes";
import { Iaction } from "./filterInterface";
import filterState from "./filterState";

export default function filter(state: number = filterState, action: Iaction) {
    switch (action.type) {
        case actionTypes.FILTER_ITEM:
            return action.filterItem;
        default:
            return state;
    }
}