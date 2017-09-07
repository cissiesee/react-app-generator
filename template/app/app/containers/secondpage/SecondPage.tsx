import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import { Link } from "react-router-dom";

class SecondPage extends React.Component<{}, {}> {
    public componentDidMount() {
        console.log("second page didmount");
    }
    public componentWillUnmount() {
        console.log("second page willunmount");
    }
    public render() {
        return (
            <div className="ui-page">
                <h3>second page</h3>
                <Link to="/third">--下一页--</Link>
            </div>
        );
    }
}

export default immutableRenderDecorator(SecondPage);
