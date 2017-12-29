import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Container from "./containers/Container";
import configureStore from "./configureStore";
import "babel-polyfill";
// import { Router, Route, IndexRoute } from "react-router";
// import { RouteTransition } from 'react-router-transition';
import {
    HashRouter,
    Route
} from "react-router-dom";

const store = configureStore();

render(
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={Container} />
        </HashRouter>
    </Provider>,
    document.getElementById("app"));