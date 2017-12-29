import * as React from "react";
import { connect } from "react-redux";
import Page from "../../ui/UIPage";
// TODO:import * as itemsActions from "../../reducers/items/itemsAction";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import "./<%=destStyle%>.less";

class <%=destClass%> extends React.Component {
    static defaultProps = {
        actions: {}
    }
    componentDidMount() {
        console.log("app page didmount");
    }
    componentWillUnmount() {
        console.log("app page willunmount");
    }
    render() {
        // console.log("context:", this.context);
        const actions = this.props.actions;
        return (
            <Page className="<%=destStyle%>">
            </Page>
        );
    }
}

export default connect((state) => ({
    // someKey: state.someKey
}), (dispatch) => ({
    actions: bindActionCreators({
        //TODO
    }, dispatch)
}))(<%=destClass %>);
