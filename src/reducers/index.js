import { combineReducers } from 'redux';
import articles from './articlesReducer';
import matches from './matchesReducer';
import keywords from './keywordsReducer';

const rootReducer = combineReducers({
  articles,
  matches,
  keywords
})

export default rootReducer;
