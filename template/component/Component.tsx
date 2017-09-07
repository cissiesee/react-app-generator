import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";

import "./<%=destStyle%>.less";

interface Iprops {
    // TODO: someProp: string
    // ...
}

// pure render function
const <%=destClass %> = (props: Iprops) => {
    return (
        <div>{this.props.someProp}</div>
    );
};

// or more complex class
// export default class <%=destClass %> extends React.Component < Iprops, {} > {
//     public componentDidMount() {
//         // TODO
//     }
//     public render() {
//         return (
//             <div>{this.props.someProp}</div>
//         );
//     }
// }

export default immutableRenderDecorator(<%=destClass %>);