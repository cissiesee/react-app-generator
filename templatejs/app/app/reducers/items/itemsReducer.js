/* app/reducers/items.js */
import * as actionTypes from "./itemTypes.js";
import itemsState from "./itemsState";

export default function items(state = itemsState, action) {
    switch (action.type) {
        case actionTypes.ITEMS_ADD:
            return state.push(state.size !== 0 ? state.get(-1) + 1 : 1);
        case actionTypes.ITEMS_DELETE:
            return state.delete(state.indexOf(action.item));
        case actionTypes.ITEMS_DELETEALL:
            return state.clear();
        default:
            return state;
    }
}