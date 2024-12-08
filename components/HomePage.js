import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import theme from '../utils/theme';
import CustomButton from '../utils/CustomButton';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to the Home Page</Text>

        <CustomButton
          title="Post a Request"
          onPress={() => navigation.navigate('PostRequest')}
          type="secondary"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.colors.textPrimary,
  },
});

export default HomePage;
