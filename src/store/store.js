import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { ADD_ARTICLE } from "./actionTypes";
import { addArticles } from "./actions";
import comboReducer from "./reducers";

import { fetchUserEpic, fetchPostEpic } from "./epics";

function logger({ getState }) {
  return (next) => (action) => {
    console.log("will dispatch", action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);
    console.log("state after dispatch", getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.

    return returnValue;
  };
}

const epicMiddleware = createEpicMiddleware({
  dependencies: {},
});

const combinedEpics = combineEpics(fetchUserEpic, fetchPostEpic);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// May also pass in initial state to createStore

const store = createStore(
  comboReducer,
  composeEnhancers(applyMiddleware(logger, epicMiddleware))
);

epicMiddleware.run(combinedEpics);

// Hardcodes an initial article inside store

store.dispatch(
  addArticles({
    type: ADD_ARTICLE,
    title: "Article added by arne",

    id: 1,
  })
);

console.log("state in store:", store.getState());

export default store;
