/**
 * Created by weijian on 2017/4/27.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import {createStore} from "redux";
import {musicPlayerApp, Store} from "./reducers";
import {applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import Player from "./containers/Player";
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'

declare const compose: any;
let musicPlayerStore = createStore(musicPlayerApp,
    applyMiddleware(thunk.withExtraArgument(document.createElement('audio')), logger)
);

ReactDOM.render(
    <Provider store={musicPlayerStore}>
        <Player/>
    </Provider>,
    document.getElementById("root")
);