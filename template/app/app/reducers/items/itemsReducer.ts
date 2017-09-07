/* app/reducers/items.js */
import * as actionTypes from "../actionTypes";
import { Iaction } from "./itemsInterface";
import itemsState from "./itemsState";

export default function items(state = itemsState, action: Iaction) {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return state.push(state.size !== 0 ? state.get(-1) + 1 : 1);
        case actionTypes.DELETE_ITEM:
            return state.delete(state.indexOf(action.item));
        case actionTypes.DELETE_ALL:
            return state.clear();
        default:
            return state;
    }
}