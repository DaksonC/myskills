import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  );
};