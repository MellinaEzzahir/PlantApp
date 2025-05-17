import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

//import local components here
import Dashboard from './screens/dashboard';
import StyleSheet from './styles/global-stylesheet';

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Dashboard />
    </View>
  );
}

