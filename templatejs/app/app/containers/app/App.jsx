import * as React from "react";
import Page from "../../ui/page/UIPage";
import SearchBar from "../../components/searchbar/SearchBar";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import * as itemsActions from "../../reducers/items/itemsAction";
import * as filterAction from "../../reducers/filter/filterAction";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
//import httpRequest from "lk-http-request";


class App extends React.Component {
    static defaultProps = {
        items: [],
        filter: "",
        actions: {}
    }
    componentDidMount() {
        console.log("app page didmount");
        //httpRequest("./lib/manifest-lib.json");
    }
    componentWillUnmount() {
        console.log("app page willunmount");
    }
    render() {
        // console.log("context:", this.context);
        const actions = this.props.actions;
        return (
            <Page>
                <h2>Manage Items</h2>
                <SearchBar filterItem={actions.filterItem} />
                <Content items={this.props.items} filter={this.props.filter} deleteItem={actions.deleteItem} />
                <Footer addItem={actions.addItem} deleteAll={actions.deleteAll} />
                <Link to="/second">下一页</Link>
            </Page>
        );
    }
}

export default connect((state) => ({
    items: state.items,
    filter: state.filter
}), (dispatch) => ({
    actions: bindActionCreators({ ...itemsActions, ...filterAction }, dispatch)
}))(App);
