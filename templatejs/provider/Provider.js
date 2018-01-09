import * as React from "react";
import PropTypes from "prop-types";
class <%=providerFullName%> extends React.Component {
    getChildContext() {
        return {
            //...
        };
    }
    render() {
        return this.props.children;
    }
}

<%=providerFullName %>.childContextTypes = {
    //... same props as getChildContext
}

export default <%=providerFullName %>;