import { combineReducers } from 'redux'
import HomeReducer from './home/HomeReducer.js'

const appReducer = combineReducers({
homeReducer:HomeReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};


export default rootReducer;
