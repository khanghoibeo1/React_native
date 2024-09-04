import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import axios from 'axios';

const OTPScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('otp.test/verify-otp', { email, otp });
      if (response.data.success) {
        navigation.navigate('ResetPasswordScreen', { email });
      } else {
        alert('OTP verification failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Enter OTP</Text>
      <OTPInputView
        pinCount={6}
        code={otp}
        onCodeChanged={setOtp}
        autoFocusOnLoad
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

export default OTPScreen;
