import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Questionui} from '../components/questionlist/Question-ui';
import {Footerbuttons} from '../components/questionlist/footer-button';

export const MainQuestionScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.innerView}>
        <Questionui />
      </View>
      <Footerbuttons navigation={navigation} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff', alignItems: 'center'},
  innerView: {
    gap: 20,
    margin: 40,
    marginTop: 80,
  },
});
