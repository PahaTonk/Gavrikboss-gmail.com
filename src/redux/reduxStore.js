import { createStore, combineReducers } from 'redux';
import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';
import navigationReducer from './reducers/navigationReducer';
import usersReducer from './reducers/usersReducer';

const reducers = combineReducers({
	profileState: profileReducer,
	dialogsState: dialogsReducer,
	navigationState: navigationReducer,
	usersState: usersReducer
});

const store = createStore(reducers);

export default store;
