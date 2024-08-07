import React, {MouseEvent} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import Colors from '../../constant/constants';
import {Dimension} from '../../constant/dimension';

interface ButtonProps {
  item: Item;
  onClick: (arg0: Item) => void;
  questionAnswer: number | null;
}
export interface Item {
  id: string;
  label: string;
  value: number;
}

export const RadioButton = (props: ButtonProps) => {
  const {item, onClick, questionAnswer} = props;
  return (
    <TouchableHighlight
      style={[
        styles.button,
        item.value == questionAnswer
          ? styles.buttonSelected
          : styles.buttonNotSelected,
      ]}
      activeOpacity={0.8}
      underlayColor={Colors.activeColor}
      onPress={() => {
        onClick(item);
      }}>
      <Text
        style={[
          styles.buttonText,
          item.value == questionAnswer
            ? styles.textActive
            : styles.textInActive,
        ]}>
        {item.label}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: Dimension.text_font_size,
    fontWeight: '400',
  },
  buttonSelected: {
    backgroundColor: Colors.activeColor, // Change color when disabled
  },
  buttonNotSelected: {
    backgroundColor: Colors.white, // Change color when disabled
    borderColor: Colors.textBorder,
    borderWidth: 0.5,
  },
  textActive: {
    color: Colors.white,
  },
  textInActive: {
    color: Colors.textColor,
    fontWeight: '400',
  },
});
