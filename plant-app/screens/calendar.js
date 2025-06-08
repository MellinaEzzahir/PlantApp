import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { createStyles } from "../styles/global-stylesheet";
import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";

// import local components here

export default function Calendar(props) {
  const { theme } = useContext(AuthContext);
    const StyleSheet = createStyles(theme);
  return (
    <View 
      style={StyleSheet.screenContainer}>
      
    </View>
  );
}