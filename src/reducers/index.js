import { combineReducers } from 'redux';
import articles from './articlesReducer';
import matches from './matchesReducer';

const rootReducer = combineReducers({
  articles,
  matches
})

export default rootReducer;
