import React from 'react';
import './tailwind.css';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import realm from './path-to-your-realm-file';
import tailwind from 'tailwind-rn';

const HomePage = ({ navigation }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const userData = realm.objects('User')[0];
      setUser(userData);
    }, []);
  
    const handleLogout = async () => {
      await AsyncStorage.removeItem('user');
      navigation.replace('LoginScreen');
    };
  
    return (
      <View style={tailwind('flex-1 justify-center items-center bg-white')}>
        {user ? (
          <>
            <Text style={tailwind('text-xl font-bold text-blue-600')}>
              Welcome, {user.email}!
            </Text>
            <Button title="Logout" onPress={handleLogout} />
          </>
        ) : (
          <Text style={tailwind('text-xl')}>Loading...</Text>
        )}
      </View>
    );
  };

export default HomePage;