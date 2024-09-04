import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      
      await AsyncStorage.setItem('user', JSON.stringify({ email, password }));
      alert('Registration successful');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error storing data', error);
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Text>Confirm Password</Text>
      <TextInput value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;