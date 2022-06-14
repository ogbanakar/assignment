import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userListReducer, getUserReducer } from './reducers/userReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  usersList: userListReducer,
  getUserReducer: getUserReducer,
});

const initialState = {
  getUserReducer: [{ user: "Click below" }]
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;