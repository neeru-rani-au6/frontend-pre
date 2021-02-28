import { createStore, applyMiddleware } from "redux";
import bookReducer from "./reducer/book";
import thunk from "redux-thunk";
const store = createStore(bookReducer, applyMiddleware(thunk));

export default store;
