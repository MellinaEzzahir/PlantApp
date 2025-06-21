import { View, Text, Pressable } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { createStyles } from "../styles/global-stylesheet";

export default function PlantCard({ plant, onDelete, onEdit }) {
    const { theme } = useContext(AuthContext);
    const StyleSheet = createStyles(theme);
    const sunEmoji = () => {
        switch (plant.sunlight) {
            case 1: return "☀️☁️☁️☁️☁️";
            case 2: return "☀️☀️☁️☁️☁️";
            case 3: return "☀️☀️☀️☁️☁️";
            case 4: return "☀️☀️☀️☀️☁️";
            case 5: return "☀️☀️☀️☀️☀️";
            default: return "idk think theres an error somewhere";
        }
    };

    const wateringText = () => {
        const wt = plant.wateringFrequency;
        if (wt % 7 === 0) {
            return wt === 7 ? "Water weekly" : `Water every ${wt / 7} weeks`;
        } else {
            return wt === 1 ? "Water daily" : `Water every ${wt} days`;
        }
    };

    return (
        <View style={StyleSheet.plantCard}>
            <Text style={StyleSheet.plantCardName}>{plant.name}</Text>
            <Text style={StyleSheet.plantCardType}>{plant.type}</Text>
            <Text style={StyleSheet.plantCardWatering}>{wateringText()}</Text>
            <Text style={StyleSheet.plantCardSunlight}>{sunEmoji()}</Text>
            <Text style={StyleSheet.plantCardNotes}>{plant.notes}</Text>
            <Pressable onPress={() => onDelete(plant.$id)}>
                <Text>Delete</Text>
            </Pressable>
            <Pressable onPress={() => onEdit(plant.$id,  )}>
                <Text>Edit</Text>
            </Pressable>
        </View>
    );
}