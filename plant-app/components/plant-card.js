import StyleSheet from '../styles/global-stylesheet'
import * as React from "react";
import { View, Text, Image, Pressable } from "react-native";

// import local components here

export default function PlantCard({ plant }) {
    const sunEmoji = (plant) => {
        switch (plant.sunlight) {
            case 1:
                return "☀️☁️☁️☁️☁️";
            case 2:
                return "☀️☀️☁️☁️☁️";
            case 3:
                return "☀️☀️☀️☁️☁️";
            case 4:
                return "☀️☀️☀️☀️☁️";
            case 5:
                return "☀️☀️☀️☀️☀️";
            default:
                console.log("error with the sunlight emojis")
                return "idk think theres an error somewhere";
        }
    }
    return (
        <View style={StyleSheet.plantCard}>
            <Text style={StyleSheet.plantCardName}>{plant.name}</Text>
            <Text style={StyleSheet.plantCardType}>{plant.type}</Text>
            <Text style={StyleSheet.plantCardWatering}>Water every {plant.wateringFrequency} days</Text>
            <Text style={StyleSheet.plantCardSunlight}>{sunEmoji(plant)}</Text>
            <Text style={StyleSheet.plantCardNotes}>{plant.notes}</Text>
        </View>
    );
}