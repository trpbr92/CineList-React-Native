import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import CineListNavigator from "./navigation/CineListNavigator";

const rootReducer = combineReducers({});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <CineListNavigator />
    </Provider>
  );
}
