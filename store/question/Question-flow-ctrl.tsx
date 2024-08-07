import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  questionCount: 0,
};

const questionFlow = createSlice({
  name: 'que_Cnt',
  initialState,
  reducers: {
    updateQuestionCount(state, action) {
      state.questionCount = action.payload.questionCount;
    },
  },
});

export const {updateQuestionCount} = questionFlow.actions;
export default questionFlow.reducer;
