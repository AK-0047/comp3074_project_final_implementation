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

  return (
    <div>

    </div>
  )
};



export default SignupScreen;
