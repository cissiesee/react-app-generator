import * as actionTypes from "../actionTypes";
import { Iaction } from "./filterInterface";

export function filterItem(value: number) {
    const action: Iaction = {
        type: actionTypes.FILTER_ITEM,
        filterItem: value
    };
    return action;
}