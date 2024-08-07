import {createSlice} from '@reduxjs/toolkit';
import questiontListJSON from '../../data/question-list.json';

const initialState = {
  questions: questiontListJSON,
};

const QuestionList = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    updateAnswer(state, action) {
      const {questionId, newData} = action.payload;
      const index = state.questions.findIndex(
        question => question.questionId === questionId,
      );
      if (index !== -1) {
        state.questions[index] = {...state.questions[index], ...newData};
      }
    },
  },
});

export const {updateAnswer} = QuestionList.actions;
export default QuestionList.reducer;
