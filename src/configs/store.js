import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "../reducers";
import rootEpic from "../epics";

const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];

middleware.push(epicMiddleware);
if (process.env.REACT_APP_ENV === "development") {
    middleware.push(loggerMiddleware);
}

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);
