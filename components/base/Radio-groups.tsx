import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RadioButtonProps, RadioGroup} from 'react-native-radio-buttons-group';

export const RadiogroupUI = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>();
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
});
