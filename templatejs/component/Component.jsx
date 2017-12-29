import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import PropTypes from "prop-types";

import "./<%=destStyle%>.less";

class <%=destClass %> extends React.Component {
    static defaultProps = {
        name: "stranger"
    }
    componentDidMount() {
        // TODO
    }
    render() {
        return (
            <div className="<%=destStyle%>">{this.props.name}</div>
        );
    }
}

<%=destClass %>.propTypes = {
    name: PropTypes.string.isRequired
}
export default immutableRenderDecorator(<%=destClass %>);