import * as actionTypes from "../actionTypes";
import { IAction } from "../reducerInterface";
// import { /*todo*/ } from "../../service/<%=reducerName%>Service";

/**
 * action输出格式
 * @export
 * @interface IAction<%=reducerClass%>
 * @extends {IAction}
 */
export interface IAction<%=reducerClass%> extends IAction {
    data ?: /*customtype*/;
}

export function <%=reducerName%> (value: any) {
    const action: IAction<%=reducerName%> = {
        type: "action type"
        // TODO
    };
    return action;
}

//...