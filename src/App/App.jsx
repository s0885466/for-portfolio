import React from 'react';
import './App.scss';
import routes from "../routes/routes";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import rootReducer from "../rootReducer/rootReducer";
import thunk from 'redux-thunk';

const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = [thunk];

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);

const store = createStore(rootReducer, enhancer);

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className={'App'}>
                    {routes}
                </div>
            </Router>
        </Provider>
    )
};

export default App;
