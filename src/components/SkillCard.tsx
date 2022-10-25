import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ISkillCardProps } from '../interfaces';
import { styles } from '../styles';

export const SkillCard = ({ skill, ...rest }: ISkillCardProps) => {
  return (
    <TouchableOpacity 
      {...rest}
      style={styles.buttonSkill}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  );
};