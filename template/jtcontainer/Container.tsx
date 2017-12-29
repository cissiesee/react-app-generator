import * as React from "react";
import { connect } from "react-redux";
// TODO:import * as itemsActions from "../../reducers/items/itemsAction";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import PageComponent from "../../components/page/PageComponent";
import { IPageActions, IPageProps, connectFunc } from "../PageCommon";

import "./<%=destStyle%>.less";

interface IActions extends IPageActions {
}
interface IProps extends IPageProps {
}

class <%=destClass%> extends React.Component < IProps, {} > {
    public componentDidMount() {
        console.log("componentDidMount");
    }
    public componentWillUnmount() {
        console.log("app page willunmount");
    }
    public render() {
        return (
            <PageComponent
                className="ui-page <%=destStyle%>"
                title=""
                history={this.props.history}
                loginInfo={this.props.loginInfo}
                homePageControl={this.props.homePageControl}
                codeTable={this.props.codeTable}
                actions={this.props.actions}
            >
                { /* todo */}
            </PageComponent>
        );
    }
}

export default connectFunc()(<%=destClass %>);
