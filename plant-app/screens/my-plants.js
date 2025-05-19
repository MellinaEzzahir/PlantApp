import StyleSheet from '../styles/global-stylesheet'
import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";

// import local components here

export default function MyPlants({navigation}) {
    return (
        <View style={StyleSheet.screenContainer}>
            <Text>My plants</Text>
        </View>
    );
}