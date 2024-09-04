import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const { email: storedEmail, password: storedPassword } = JSON.parse(userData);
        if (email === storedEmail && password === storedPassword) {
          alert('Login successful');
          navigation.navigate('HomeScreen'); 
        } else {
          alert('Invalid credentials');
        }
      } else {
        alert('No user found, please register first');
      }
    } catch (error) {
      console.error('Error reading data', error);
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Forgot Password?" onPress={() => navigation.navigate('ForgotPasswordScreen')} />
    </View>
  );
};

export default LoginScreen;