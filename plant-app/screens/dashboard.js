import StyleSheet from '../styles/global-stylesheet'
import * as React from "react";
import { View, Text, Image } from "react-native";

// import local components here

export default function Dashboard() {
  return (
    <View 
      style={StyleSheet.dashboardContainer}>
        <Text>This is the dashboard</Text>
    </View>
  );
}