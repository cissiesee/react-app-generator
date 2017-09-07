import * as React from "react";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import { CSSTransitionGroup } from "react-transition-group";
import ImmutableRenderMixin from "react-immutable-render-mixin";
import { Switch } from "react-router";
import { Route, Link } from "react-router-dom";

import App from "./app/App";
import SecondPage from "./secondpage/SecondPage";
import ThirdPage from "./thirdpage/ThirdPage";

import "../styles/ui.less";
import "./container.less";
import "./router-animate.less";

interface IHistory extends History { action: string; }
interface ILocation extends Location { key: string; state: string; }
interface IProps { history: IHistory; location: ILocation; }

class Container extends React.Component<IProps, {}> {
    public componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener("touchmove", (ev) => {
            ev.preventDefault();
        });
    }
    public render() {
        // console.log(this.props.location.pathname, ",", this.props.history.action);
        const action = this.props.history.action;
        const location = this.props.location;
        const isPop = action === "POP" ? true : false;
        const transitionName = "transitionWrapper" + (isPop ? "-back" : "");
        const duration = 400;
        return (
            <CSSTransitionGroup
                transitionName={transitionName}
                component="div"
                className="transitionWrapper"
                transitionEnterTimeout={duration}
                transitionLeaveTimeout={duration}>
                <Switch key={location.pathname} location={location}>
                    <Route exact path="/" component={App} />
                    <Route path="/second" component={SecondPage} />
                    <Route path="/third" component={ThirdPage} />
                </Switch>
            </CSSTransitionGroup>
        );
    }
}

export default immutableRenderDecorator(Container);
