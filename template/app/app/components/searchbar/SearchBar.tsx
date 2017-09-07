import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";

import "./searchbar.less";

interface Iprops { filterItem: (value: number) => void; }

class SearchBar extends React.Component<Iprops, {}> {
    public render() {
        // let items = this.context.store.getState().items.toArray();
        // console.log(this.state);
        return (
            <div className="pure-form">
                <input
                    type="text"
                    onKeyUp={this.keyUpHandler.bind(this)}
                    onClick={this.clickHandler.bind(this)}
                    placeholder="请输入查找的item" />
            </div>
        );
    }
    private keyUpHandler = (e: MouseEvent) => {
        this.props.filterItem(parseInt((e.target as HTMLInputElement).value, 10));
    }
    private clickHandler = (e: MouseEvent) => {
        console.log(e.target);
    }
}

export default immutableRenderDecorator(SearchBar);
