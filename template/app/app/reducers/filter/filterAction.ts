import * as actionTypes from "../actionTypes";
import { IAction } from "../reducerInterface";

export function filterItem(value: number) {
    const action: IAction = {
        type: "filter/filterItem",
        data: value
    };
    return action;
}