import StyleSheet from '../styles/global-stylesheet'
import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";

// import local components here

export default function PlantCard({plant}) {
  return (
    <View style={StyleSheet.plantCard}>
        <Text style={StyleSheet.plantCardName}>{plant.name}</Text>
        <Text>{plant.type}</Text>
        <Text>Water every {plant.wateringFrequency} days</Text>
        <Text>{plant.notes}</Text>
    </View>
  );
}