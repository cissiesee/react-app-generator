import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import { Link } from "react-router-dom";

class ThirdPage extends React.Component<{}, {}> {
    public componentDidMount() {
        console.log("third page didmount");
    }
    public componentWillUnmount() {
        console.log("third page willunmount");
    }
    public render() {
        return (
            <div className="ui-page">
                <h3>third page</h3>
            </div>
        );
    }
}

export default immutableRenderDecorator(ThirdPage);