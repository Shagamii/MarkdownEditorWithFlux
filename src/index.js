import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './Reducers';

let store = createStore(rootReducer);

import MarkdownEditor from './MarkdownEditor.js';
import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    <MarkdownEditor />
  </Provider>,
  document.getElementById('root')
);
