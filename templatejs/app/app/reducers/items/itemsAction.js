import * as actionTypes from "./itemTypes.js";

export function addItem() {
    return (dispatch) => {
        const action = {
            type: actionTypes.ITEMS_ADD
        };
        setTimeout(() => dispatch(action), 200);
    };
}
export function deleteItem(item) {
    const action = {
        type: actionTypes.ITEMS_DELETE,
        item
    };
    return action;
}
export function deleteAll() {
    const action = {
        type: actionTypes.ITEMS_DELETEALL
    };
    return action;
}