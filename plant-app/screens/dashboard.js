import StyleSheet from '../styles/global-stylesheet'
import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";

// import local components here

export default function Dashboard({navigation}) {
  return (
    <View 
      style={StyleSheet.screenContainer}>
        <Text>This is the dashboard</Text>
    </View>
  );
}