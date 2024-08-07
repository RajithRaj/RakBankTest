import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Item, RadioButton} from '../base/Radio-button';
import Colors from '../../constant/constants';
import {useDispatch, useSelector} from 'react-redux';
import {updateAnswer} from '../../store/question/Question-data-repo';

export const Questionui = () => {
  const Que_current_cnt = useSelector(
    state => state.questionFlow.questionCount,
  );
  const questionList = useSelector(state => state.questionRepo.questions);

  const [question, setQuestion] = useState(questionList[Que_current_cnt]);
  const dispatch = useDispatch();

  function onClick(item: Item) {
    setQuestion(prev => ({...prev, questionAnswer: item.value}));

    const updatedData = {
      questionAnswer: item.value,
    };
    dispatch(
      updateAnswer({questionId: question.questionId, newData: updatedData}),
    );
  }
  useEffect(() => {
    setQuestion(questionList[Que_current_cnt]);
  }, [Que_current_cnt]);

  return (
    <View style={{gap: 30}}>
      <Text style={{fontSize: 20, color: Colors.textColor}}>
        {question?.questionName}
      </Text>
      <View style={{gap: 15}}>
        {question.options?.map(opt => {
          return (
            <View key={opt.id}>
              <RadioButton
                item={opt}
                onClick={onClick}
                questionAnswer={question?.['questionAnswer']}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};
