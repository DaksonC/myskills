import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export const ButtonAdd = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};