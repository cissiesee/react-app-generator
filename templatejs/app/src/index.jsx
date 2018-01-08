import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Container from "./containers/Container";
import configureStore from "./configureStore";
import { AppContainer } from "react-hot-loader";
import "babel-polyfill";
// import { Router, Route, IndexRoute } from "react-router";
// import { RouteTransition } from 'react-router-transition';
import {
    HashRouter,
    Route
} from "react-router-dom";

const store = configureStore();

render(
    <AppContainer>
        <Provider store={store}>
            <HashRouter>
                <Route path="/" component={Container} />
            </HashRouter>
        </Provider>
    </AppContainer>, document.getElementById("app")
);

if (module.hot) {
    module.hot.accept();
}