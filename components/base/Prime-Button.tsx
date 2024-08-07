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
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Primebutton = (props: ButtonProps) => {
  const {title, onClick, disabled} = props;
  return (
    <TouchableHighlight
      style={[styles.button, disabled ? styles.buttonDisabled : null]}
      activeOpacity={0.8}
      underlayColor={Colors.activeColor}
      onPress={() => {
        onClick();
      }}
      disabled={disabled}>
      <Text style={[styles.buttonText, disabled ? styles.textDisabled : null]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    color: Colors.activeColor,
    paddingLeft: 30,
    paddingRight: 30,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: Dimension.prime_button_font_size,
    fontWeight: '600',
  },
  buttonDisabled: {
    backgroundColor: Colors.textBgDisable,
  },
  textDisabled: {
    color: Colors.black,
  },
});
