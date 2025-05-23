import StyleSheet from '../styles/global-stylesheet'
import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";

// import local components here

export default function CustomHeader({ title }) {
  return (
    <View style={StyleSheet.customHeader}>
       <Text style={StyleSheet.customHeaderTitle}>{title}</Text>
    </View>
  );
}