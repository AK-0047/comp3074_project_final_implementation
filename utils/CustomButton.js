import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../utils/theme';

const CustomButton = ({ title, onPress, type = 'primary', style }) => {
  const buttonStyle = [theme.buttons.default, theme.buttons[type], style];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={[styles.buttonText, { color: theme.colors.buttonText }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: theme.fonts.medium,
    fontWeight: 'bold',
  },
});

export default CustomButton;
