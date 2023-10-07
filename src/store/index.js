import { combineReducers, compose, legacy_createStore } from "redux";
import formReducer from '../reducers/formReducer';
import searchReducer from '../reducers/searchReducer';
import listReducer from '../reducers/listReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore() {
  return legacy_createStore(
    combineReducers({
      form: formReducer,
      search: searchReducer,
      list: listReducer,
    }),
    compose(
      ReactReduxDevTools,
      )
  );
};