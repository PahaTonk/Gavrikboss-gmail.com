import { createStore, combineReducers } from 'redux';
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import navigationReducer from "./reducers/navigationReducer";

const reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    navigationState: navigationReducer
});


const store = createStore(reducers);

export default store;