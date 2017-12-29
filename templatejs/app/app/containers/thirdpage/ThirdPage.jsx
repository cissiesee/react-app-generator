import * as React from "react";
import { Link } from "react-router-dom";

class ThirdPage extends React.Component {
    componentDidMount() {
        console.log("third page didmount");
    }
    componentWillUnmount() {
        console.log("third page willunmount");
    }
    render() {
        return (
            <div className="ui-page">
                <h3>third page</h3>
            </div>
        );
    }
}

export default ThirdPage;