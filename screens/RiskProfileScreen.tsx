import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import Colors from '../constant/constants';
import {useSelector} from 'react-redux';

export const RiskProfileScreen = () => {
  const questionList = useSelector(state => state.questionRepo.questions);
  const [riskScore, setRiskScore] = useState(0);

  useEffect(() => {
    calculateRiskScore();
  }, []);

  const calculatePercentage = (value, total) => {
    return total ? (value / total) * 100 : 0;
  };

  function calculateRiskScore() {
    if (questionList == null && questionList.length < 1) return;

    let risk_score = 0;

    questionList.map(question => {
      // const totalValue = question.options.reduce(
      //   (acc, opt) => acc + opt.value,
      //   0,
      // );
      const total_perc = calculatePercentage(question['questionAnswer'], 10);

      console.log('TOTAL', total_perc);

      risk_score += total_perc;
    });

    setRiskScore(risk_score / questionList.length);
  }

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{marginBottom: 100}}>
        <AnimatedProgressWheel
          showProgressLabel={true}
          progress={riskScore}
          animateFromValue={0}
          duration={3000}
          color={Colors.activeColor}
          backgroundColor={Colors.disableColor}
          size={300}
          width={30}
          rotation={'-90deg'}
          subtitle={'Your risk score'}
          labelStyle={styles.progressLabel}
          subtitleStyle={styles.subtitle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressLabel: {
    fontSize: 40,
    color: Colors.activeColor,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 20,
    color: Colors.textDisable,
    fontWeight: '300',
  },
});
