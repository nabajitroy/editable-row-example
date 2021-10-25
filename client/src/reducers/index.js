import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
// other reducers needs to import here
const rootReducers = combineReducers({
    AppReducer: AppReducer,
});
export default rootReducers;