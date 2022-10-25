import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity
} from 'react-native';
import { styles } from '../styles';
import { ButtonAdd } from '../components/ButtonAdd';
import { SkillCard } from '../components/SkillCard';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const handleAddNewSkill = () => {
    setMySkills(oldState => [...oldState, newSkill]);
  };

  return (
    <View style={styles.container}>      
      <Text style={styles.title}>Welcome, Dakson!</Text>
      <TextInput 
        style={styles.input} 
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <ButtonAdd onPress={handleAddNewSkill}/>
      <Text style={[styles.title, { marginVertical: 40 }]}>
        My Skills
      </Text>
      { 
        mySkills.map(skill => (
          <SkillCard key={skill} skill={skill} />
        ))
      }
    </View>
  );
}

