import * as actionTypes from "../actionTypes";
import { Iaction } from "./<%=reducerName%>Interface";
import <%=reducerName %>State from "./<%=reducerName%>State";

export default function <%=reducerName%>(state: string = <%=reducerName %>State, action: Iaction) {
    switch (action.type) {
        // TODO
        default:
            return state;
    }
}