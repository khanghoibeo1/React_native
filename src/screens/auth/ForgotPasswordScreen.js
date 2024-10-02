import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendOTP = async () => {
    try {
      const response = await axios.post('otp.test/forgot-password', { email });
      if (response.data.success) {
        
        navigation.navigate('OTPScreen', { email });
      } else {
        alert('Failed to send OTP');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Button title="Send OTP" onPress={handleSendOTP} />
    </View>
  );
};

export default ForgotPasswordScreen;
