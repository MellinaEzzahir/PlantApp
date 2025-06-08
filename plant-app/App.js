import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, AuthContext } from './auth-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState, useContext } from 'react';

//import local components here
import Dashboard from './screens/dashboard';
import MyPlants from './screens/my-plants';
import Settings from './screens/settings';
import Calendar from './screens/calendar';
import LoginScreen from './login/login-screen';
import SignUpScreen from './login/sign-up-screen';


import CustomHeader from './components/custom-header';
import { createStyles } from './styles/global-stylesheet';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const { theme } = useContext(AuthContext);
  const StyleSheet = createStyles(theme);
  const screenWidth = Dimensions.get('window').width;
  const isPhoneSize = screenWidth < 600;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'speedometer' : 'speedometer-outline';
          } else if (route.name === 'MyPlants') {
            iconName = focused ? 'leaf' : 'leaf-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: isPhoneSize ? 14 : 20,
        },
        tabBarPressColor: 'transparent',
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.primary,
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name="MyPlants" component={MyPlants} options={{ tabBarLabel: 'My Plants', header: () => <CustomHeader title="My Plants" /> }} />
      <Tab.Screen name="Calendar" component={Calendar} options={{ header: () => <CustomHeader title="Calendar" /> }} />
      <Tab.Screen name="Settings" component={Settings} options={{ header: () => <CustomHeader title="Settings" /> }} />

    </Tab.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}


function RootNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn == null) {
    return null;
  }

  return isLoggedIn ? (<MainTabs />) : (<AuthStack />);
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

