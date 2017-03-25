import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import markdownEdtor from './markdownEditor';

const rootReducer = combineReducers({
  markdownEdtor
});

export default rootReducer;
