import React, {useState} from 'react';
import {View} from 'react-native';
import {Primebutton} from '../base/Prime-Button';
import {useDispatch, useSelector} from 'react-redux';
import {updateQuestionCount} from '../../store/question/Question-flow-ctrl';
import questiontList from '../../data/question-list.json';

export const Footerbuttons = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const Que_current_cnt = useSelector(
    state => state.questionFlow.questionCount,
  );

  const questionList = useSelector(state => state.questionRepo.questions);
  const [QuestLenth, setQuestLenth] = useState(questiontList?.length - 1);

  function onPrev() {
    if (Que_current_cnt > 0) {
      const payLoad = {questionCount: Que_current_cnt - 1};
      dispatch(updateQuestionCount(payLoad));
    }
  }

  function onNext() {
    if (Que_current_cnt < QuestLenth) {
      const payLoad = {questionCount: Que_current_cnt + 1};
      dispatch(updateQuestionCount(payLoad));
    } else {
      navigation.navigate('Risk Profile');
    }
  }
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          margin: 40,
          flex: 1,
        }}>
        <Primebutton
          title="Prev"
          onClick={onPrev}
          disabled={Que_current_cnt == 0 ? true : false}
        />

        <Primebutton
          title={Que_current_cnt < QuestLenth ? 'Next' : 'Finish'}
          onClick={onNext}
          disabled={
            questionList[Que_current_cnt]?.['questionAnswer'] == null
              ? true
              : false
          }
        />
      </View>
    </View>
  );
};
