import * as React from "react";

import Page from "../../ui/UIPage";
// TODO:import * as itemsActions from "../../reducers/items/itemsAction";
<% if (mobx) { %>
import { observer } from "mobx-react";
//import store from "../../store/main";
<% } else { %>
import { connect } from "react-redux";
    import { bindActionCreators } from "redux";
<% } %>
import { Link } from "react-router-dom";

import "./<%=destStyle%>.less";

<% if (mobx) { %>
@observer
<% } %>
class <%=destClass%> extends React.Component {
    <% if (mobx) { %>
    static defaultProps = {
        actions: {}
    }
    <% } %>
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

<% if (mobx) { %>
export default <%=destClass %>;
<% } else { %>
export default connect((state) => ({
    // someKey: state.someKey
}), (dispatch) => ({
    actions: bindActionCreators({
        //TODO
    }, dispatch)
}))(<%=destClass %>);
<% } %>
