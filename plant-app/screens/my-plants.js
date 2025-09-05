import * as React from "react";
import { View, Text, TextInput, Button, FlatList, Modal, TouchableOpacity } from "react-native";
import { database, account } from '../lib/app-write';
import { ID, Query } from 'appwrite';
import PlantCard from "../components/plant-card";
import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { createStyles } from "../styles/global-stylesheet";

export default function MyPlants() {
    const [plants, setPlants] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [modalVisible, setModalVisible] = React.useState(false);

    const { theme } = useContext(AuthContext);
    const StyleSheet = createStyles(theme);

    React.useEffect(() => {
        fetchPlants();
    }, []);

    const fetchPlants = async () => {
        try {
            const user = await account.get();

            const response = await database.listDocuments(
                'database',
                'plants',
                [Query.equal('userId', user.$id)]
            );
            setPlants(response.documents);
        } catch (error) {
            console.error("Error fetching plants:", error);
        } finally {
            setLoading(false);
        }
    };

    const [newPlant, setNewPlant] = React.useState({
        name: '',
        type: '',
        wateringFrequency: '',
        sunlight: '',
        notes: '',
    });

    const handleAddPlant = async () => {
        if (
            !newPlant.name.trim() ||
            !newPlant.type.trim() ||
            isNaN(newPlant.wateringFrequency) ||
            isNaN(newPlant.sunlight)
        ) {
            alert("Please fill out all required fields correctly.");
            return;
        }

        try {
            const user = await account.get();

            const created = await database.createDocument(
                'database',
                'plants',
                ID.unique(),
                {
                    name: newPlant.name.trim(),
                    type: newPlant.type.trim(),
                    wateringFrequency: parseInt(newPlant.wateringFrequency),
                    sunlight: parseInt(newPlant.sunlight),
                    notes: newPlant.notes.trim(),
                    userId: user.$id,
                }
            );

            setPlants(prev => [created, ...prev]);
            setNewPlant({ name: '', type: '', wateringFrequency: '', sunlight: '', notes: '' });
            setModalVisible(false);
        } catch (err) {
            console.error("Failed to create plant", err);
        }
    };

    const handleDeletePlant = async (id, newPlant) => {
        try {
            const result = await database.deleteDocument("database", "plants", id)
            fetchPlants();
        } catch (err) {
            console.log(err)
        }
    }

    const handleEditPlant = async (id) => {
        try{
            const result = await database.updateDocument("da")
            fetchPlants
        }catch (err){
            console.log(err)
        }
    }

    return (
        <View style={StyleSheet.screenContainer}>
            <Text style={StyleSheet.loginTitle}>My Plants</Text>

            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <>
                    <FlatList
                        data={plants}
                        keyExtractor={(plant) => plant.$id}
                        renderItem={({ item }) =>
                            <PlantCard
                                plant={item}
                                onDelete={handleDeletePlant}
                                onEdit={handleEditPlant}
                            />}
                        style={StyleSheet.myPlants}
                    />

                    <View style={{ width: '95%', marginBottom: 16 }}>
                        <Button
                            title="Add a Plant"
                            onPress={() => setModalVisible(true)}
                            color={StyleSheet.customHeader.backgroundColor} // keeps the button colour consistent with header
                        />
                    </View>

                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            padding: 20,
                        }}>
                            <View style={[StyleSheet.plantModal, { backgroundColor: 'white' }]}>
                                <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold', color: StyleSheet.customHeader.backgroundColor }}>
                                    Add a Plant
                                </Text>

                                <TextInput
                                    placeholder="Plant Name *"
                                    value={newPlant.name}
                                    onChangeText={(text) => setNewPlant({ ...newPlant, name: text })}
                                    style={StyleSheet.loginUsername}
                                />
                                <TextInput
                                    placeholder="Type (e.g., indoor, outdoor) *"
                                    value={newPlant.type}
                                    onChangeText={(text) => setNewPlant({ ...newPlant, type: text })}
                                    style={StyleSheet.loginUsername}
                                />
                                <TextInput
                                    placeholder="Watering Frequency (days) *"
                                    value={newPlant.wateringFrequency}
                                    onChangeText={(text) => setNewPlant({ ...newPlant, wateringFrequency: text })}
                                    keyboardType="numeric"
                                    style={StyleSheet.loginUsername}
                                />
                                <TextInput
                                    placeholder="Sunlight (1-5) *"
                                    value={newPlant.sunlight}
                                    onChangeText={(text) => setNewPlant({ ...newPlant, sunlight: text })}
                                    keyboardType="numeric"
                                    style={StyleSheet.loginUsername}
                                />
                                <TextInput
                                    placeholder="Notes (optional)"
                                    value={newPlant.notes}
                                    onChangeText={(text) => setNewPlant({ ...newPlant, notes: text })}
                                    style={StyleSheet.loginUsername}
                                />

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Button title="Cancel" onPress={() => setModalVisible(false)} color="#888" />
                                    <Button title="Add Plant" onPress={handleAddPlant} color={StyleSheet.customHeader.backgroundColor} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </>
            )}
        </View>
    );
}