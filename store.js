import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listReducer, urlReducer } from "./reducers/urlReducer";


const reducer = combineReducers({
  url: urlReducer,
  // urlList: listReducer,
});
//we check if we on server or client cus localstorage doesnt run on server side
const serv = typeof window === "undefined";

let initialState = {
  url: {
    urlItems:
      !serv && localStorage.getItem("urlItems")
        ? JSON.parse(localStorage.getItem("urlItems"))
        : [],
  }
  ,
  // ,
  // urlList:
  //   !serv && localStorage.getItem("urlList")
  //     ? JSON.parse(localStorage.getItem("urlList"))
  //     : {},

};

const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
