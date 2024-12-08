import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import theme from '../utils/theme';
import CustomButton from '../utils/CustomButton';
import { UserContext } from '../context/UserContext'; // Import UserContext

const SignupScreen = ({ navigation }) => {
  const { setUserDetails } = useContext(UserContext); // Access setUserDetails from context
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  const handleContinue = () => {
    if (!email || !username || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      setErrorVisible(true);
    } else {
      setErrorVisible(false);

      // Save user details in context
      setUserDetails({ email, username });

      Alert.alert('Success', 'Account Created Successfully!', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('MainTabs'); // Navigate to MainTabs
          },
        },
      ]);
    }
  };

  return (
    <div>

    </div>
  )
};



export default SignupScreen;
