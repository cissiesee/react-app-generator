import * as actionTypes from "../actionTypes";
import { IAction } from "../reducerInterface";
import { /*todo*/ } from "./<%=reducerName%>Action";
import <%=reducerName %>State from "./<%=reducerName%>State";

export default function <%=reducerName%>(state: /*type*/ = <%=reducerName %>State, action: IAction) {
    switch (action.type) {
        // TODO
        default:
            return state;
    }
}