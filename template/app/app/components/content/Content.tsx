import * as React from "react";
import "./content.less";

export interface Iprops { filter: string; deleteItem: () => void; items: number[]; }

export default class Content extends React.Component<Iprops, {}> {
    public render() {

        return (
            <ul>
                {this.props.items.map((v) =>
                    <LiItem
                        filter={parseInt(this.props.filter, 10)}
                        item={v} key={v}
                        deleteItem={this.props.deleteItem}
                    />)}
            </ul>
        );
    }
}

interface Isubprops { filter: number; deleteItem: () => void; item: number; }

class LiItem extends React.Component<Isubprops, {}> {
    public render() {
        // let liClass = classNames({ hidden: this.props.filter && this.props.filter != this.props.item});

        const isHidden = this.props.filter && this.props.filter !== this.props.item;

        // console.log('this.props.item:', this.props.item);
        // console.log('this.props.filter:', this.props.filter);
        // console.log('liClass:', liClass);

        return (
            <li style={{ display: isHidden ? "none" : "block" }}>
                <span style={{ marginRight: "4px" }}>{this.props.item}</span>
                <button onClick={this.props.deleteItem.bind(this, this.props.item)}>delete</button>
            </li>
        );
    }
}
