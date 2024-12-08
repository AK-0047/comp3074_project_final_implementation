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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={theme.colors.textSecondary}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={theme.colors.textSecondary}
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={theme.colors.textSecondary}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor={theme.colors.textSecondary}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {errorVisible && (
          <Text style={styles.errorText}>Passwords do not match</Text>
        )}

        <CustomButton
          title="Continue"
          onPress={handleContinue}
          type="secondary"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: theme.colors.textPrimary,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: theme.colors.cardBackground,
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: theme.fonts.small,
  },
});

export default SignupScreen;
