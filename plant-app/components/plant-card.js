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

    const wateringText = (plant) => {
        const wt = plant.wateringFrequency;
        if (wt % 7 == 0) {
            if (wt / 7 == 1) {
                return "Water weekly";
            } else {
                return "Water every " + wt / 7 + " weeks";
            }
        } else {
            if (wt == 1) {
                return "Water daily";
            } else {
                return "Water every " + wt + " days";
            }
        }
    }

    return (
        <View style={StyleSheet.plantCard}>
            <Text style={StyleSheet.plantCardName}>{plant.name}</Text>
            <Text style={StyleSheet.plantCardType}>{plant.type}</Text>
            <Text style={StyleSheet.plantCardWatering}>{wateringText(plant)}</Text>
            <Text style={StyleSheet.plantCardSunlight}>{sunEmoji(plant)}</Text>
            <Text style={StyleSheet.plantCardNotes}>{plant.notes}</Text>
        </View>
    );
}