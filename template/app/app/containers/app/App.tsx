import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import SearchBar from "../../components/searchbar/SearchBar";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import * as itemsActions from "../../reducers/items/itemsAction";
import * as filterAction from "../../reducers/filter/filterAction";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

interface Iactions {
    addItem: () => void;
    filterItem: () => void;
    deleteItem: () => void;
    deleteAll: () => void;
}
interface Iprops { items: number[]; filter: string; actions: Iactions; }

class App extends React.Component<Iprops, {}> {
    public componentDidMount() {
        console.log("app page didmount");
    }
    public componentWillUnmount() {
        console.log("app page willunmount");
    }
    public render() {
        // console.log("context:", this.context);
        const actions: Iactions = this.props.actions;
        return (
            <div className="ui-page">
                <h2>Manage Items</h2>
                <SearchBar filterItem={actions.filterItem} />
                <Content items={this.props.items} filter={this.props.filter} deleteItem={actions.deleteItem} />
                <Footer addItem={actions.addItem} deleteAll={actions.deleteAll} />
                <Link to="/second">下一页</Link>
            </div>
        );
    }
}

export default connect((state) => ({
    items: state.items,
    filter: state.filter
}), (dispatch) => ({
    actions: bindActionCreators({ ...itemsActions, ...filterAction }, dispatch)
}))(immutableRenderDecorator(App));
