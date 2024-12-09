import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../utils/theme';
import CustomButton from '../utils/CustomButton';
import { UserContext } from '../context/UserContext'; // Import UserContext

const AccountPage = ({ navigation }) => {
  const { userDetails } = useContext(UserContext); // Access userDetails from context

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignupScreen' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Details</Text>
      <Text style={styles.details}>Email: {userDetails.email || 'N/A'}</Text>
      <Text style={styles.details}>Username: {userDetails.username || 'N/A'}</Text>

      <CustomButton
        title="Logout"
        onPress={handleLogout}
        type="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.colors.textPrimary,
  },
  details: {
    fontSize: theme.fonts.medium,
    marginBottom: 10,
    color: theme.colors.textSecondary,
  },
});

export default AccountPage;
