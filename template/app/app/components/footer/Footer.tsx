import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";

import "./footer.less";

interface Iprops { addItem: () => void; deleteAll: () => void; }

const Footer = (props: Iprops) => {
    return (
        <div style={{ textAlign: "center" }}>
            <button
                style={{ marginRight: "10px" }}
                className="pure-button button-secondary button-small"
                onClick={props.addItem}>add</button>
            <button
                className="pure-button button-error button-small"
                onClick={props.deleteAll}>deleteAll</button>
        </div>
    );
};

export default immutableRenderDecorator(Footer);
