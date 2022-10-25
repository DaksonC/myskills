import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IButtonProps } from '../interfaces';
import { styles } from '../styles';

export const ButtonAdd = ({title, ...rest}: IButtonProps) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.6}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};