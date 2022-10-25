import { TouchableOpacityProps } from 'react-native';

export interface ISkillData {
  id: string;
  name: string;
}

export interface IButtonProps extends TouchableOpacityProps {
  title: string;
} 

export interface ISkillCardProps extends TouchableOpacityProps {
  skill: string;
}