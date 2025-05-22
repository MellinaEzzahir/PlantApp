import * as React from "react";
import { View, Text, Image, Pressable, ScrollView, FlatList } from "react-native";

// import local components here
import plants from "../templates/sample-plants";
import StyleSheet from '../styles/global-stylesheet';
import PlantCard from "../components/plant-card";

export default function MyPlants() {
    const renderItem = ({ item }) => (
        <PlantCard plant={item} />
    );

    return (
        <View style={StyleSheet.screenContainer}>
            {console.log("plants:", plants)}
            <Text>My plants</Text>
            <FlatList
                data={plants}
                keyExtractor={(plant) => plant.id}
                renderItem={renderItem}
                style={StyleSheet.myPlants}
            />
        </View>
    );
}