import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  FlatList,
} from 'react-native';
import { styles } from '../styles';
import { SkillCard } from '../components/SkillCard';
import { ButtonAdd } from '../components/ButtonAdd';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  const handleAddNewSkill = () => {
    setMySkills(oldState => [...oldState, newSkill]);
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
      <ButtonAdd onPress={handleAddNewSkill}/>
      <Text style={[styles.title, { marginVertical: 40 }]}>
        My Skills
      </Text>
      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />         
    </View>
  );
}

