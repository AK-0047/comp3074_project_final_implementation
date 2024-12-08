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


export default HomePage;
