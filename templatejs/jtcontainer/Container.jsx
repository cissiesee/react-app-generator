import * as React from "react";
import { connect } from "react-redux";
// TODO:import * as itemsActions from "../../reducers/items/itemsAction";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

import "./<%=destStyle%>.less";

class <%=destClass%> extends React.Component {
    static defaultProps = {
        propName: "propValue"
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillUnmount() {
        console.log("app page willunmount");
    }
    render() {
        return (
            <PageComponent
                className="ui-page <%=destStyle%>"
                title=""
                history={this.props.history}
                actions={this.props.actions}
            >
                { /* todo */}
            </PageComponent>
        );
    }
}

<%=destClass %>.propTypes = {
    propName: PropTypes.string
}

export default connect((state) => ({
    //items: state.items,
    //filter: state.filter
}), (dispatch) => ({
    actions: bindActionCreators({ /*...itemsActions, ...filterAction*/ }, dispatch)
}))(<%=destClass %>);
