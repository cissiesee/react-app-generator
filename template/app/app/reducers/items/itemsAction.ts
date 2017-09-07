import * as actionTypes from "../actionTypes";
import { Iaction } from "./itemsInterface";

export function addItem() {
    return (dispatch: (a: Iaction) => void) => {
        const action: Iaction = {
            type: actionTypes.ADD_ITEM
        };
        setTimeout(() => dispatch(action), 200);
    };
}
export function deleteItem(item: number) {
    const action: Iaction = {
        type: actionTypes.DELETE_ITEM,
        item
    };
    return action;
}
export function deleteAll() {
    const action: Iaction = {
        type: actionTypes.DELETE_ALL
    };
    return action;
}