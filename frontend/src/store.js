import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos, selectionFilters } from "./components/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const reducers = { todos, selectionFilters };

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
