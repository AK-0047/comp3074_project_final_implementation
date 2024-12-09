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
import { UserProvider } from './context/UserContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff', height: 60 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Trips') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Trips" component={TripsPageScreen} />
      <Tab.Screen name="Account" component={AccountPage} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <TripsProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignupScreen">
            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainTabs"
              component={MainTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="PostRequest" component={PostRequestScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </TripsProvider>
  );
};

export default App;
