import {configureStore} from '@reduxjs/toolkit';
import questionFlowReducer from './question/Question-flow-ctrl';
import questionAnswer from './question/Question-data-repo';

export const store = configureStore({
  reducer: {
    questionFlow: questionFlowReducer,
    questionRepo: questionAnswer,
  },
});
