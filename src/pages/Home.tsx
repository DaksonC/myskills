import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  FlatList,
} from 'react-native';
import { styles } from '../styles';
import { ISkillData } from '../interfaces';
import { SkillCard } from '../components/SkillCard';
import { ButtonAdd } from '../components/ButtonAdd';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<ISkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAddNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills(oldState => [...oldState, data]);
  };

  const handleRemoveSkill = (id: string) => {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  };

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good morning !');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon !');
    } else {
      setGreeting('Good night !');
    }
  }, []);

  return (
    <View style={styles.container}>      
      <Text style={styles.title}>Welcome, Dakson!</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput 
        style={styles.input} 
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <ButtonAdd 
        title="+ new skill"
        onPress={handleAddNewSkill}
      />
      <Text style={[styles.title, { marginVertical: 40 }]}>
        My Skills
      </Text>
      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name} 
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />         
    </View>
  );
}

