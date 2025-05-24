import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Appwrite } from 'appwrite';

//import local components here
import Dashboard from './screens/dashboard';
import MyPlants from './screens/my-plants';
import Settings from './screens/settings';
import Calendar from './screens/calendar';

import { account, client } from './lib/app-write'

import CustomHeader from './components/custom-header';

import theme from './styles/theme'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  useEffect(() => {
    console.log('App just opened!');
    const userLoggedIn = async () => {
      try {
        const user = await account.get();
        console.log('User is logged in:'+ user)
        return true;
      } catch (error) {
        console.log('User is not logged in:' + error)
        return false;
      }
    }
     userLoggedIn(); 
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({

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
          tabBarPressColor: 'transparent',
          tabBarActiveTintColor: theme.colors.secondary,
          tabBarInactiveTintColor: theme.colors.primary,
        })}>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Tab.Screen name="MyPlants" component={MyPlants} options={{ tabBarLabel: 'My Plants', header: () => <CustomHeader title="My Plants" /> }} />
        <Tab.Screen name="Calendar" component={Calendar} options={{ header: () => <CustomHeader title="Calendar" /> }} />
        <Tab.Screen name="Settings" component={Settings} options={{ header: () => <CustomHeader title="Settings" /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

