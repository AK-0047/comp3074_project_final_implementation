import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './components/SignupScreen';
import HomePage from './components/HomePage';
import PostRequestScreen from './components/PostRequest';
import TripsPageScreen from './components/TripsPage';
import AccountPage from './components/AccountPage';
import { TripsProvider } from './context/TripsContext';
import { UserProvider } from './context/UserContext'; // Import UserProvider
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <div></div>
  );
};

const App = () => {
  return (
    <div></div>
  );
};

export default App;
