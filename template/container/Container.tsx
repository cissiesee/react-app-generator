import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import { connect } from "react-redux";
// TODO:import * as itemsActions from "../../reducers/items/itemsAction";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import "./<%=destStyle%>.less";

interface Iactions {
    // TODO
}
interface Iprops {
    // TODO: someKey: string
    actions: Iactions;
}

class <%=destClass%> extends React.Component < Iprops, {} > {
    public componentDidMount() {
        console.log("app page didmount");
    }
    public componentWillUnmount() {
        console.log("app page willunmount");
    }
    public render() {
        // console.log("context:", this.context);
        const actions: Iactions = this.props.actions;
        return (
            <div className="ui-page">
            </div>
        );
    }
}

export default connect((state) => ({
    // someKey: state.someKey
}), (dispatch) => ({
    actions: bindActionCreators({
        //TODO
    }, dispatch)
}))(immutableRenderDecorator(<%=destClass %>));
