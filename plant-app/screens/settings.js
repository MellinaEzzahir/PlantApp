import React, { useState } from 'react';
import StyleSheet from '../styles/global-stylesheet'
import { View, Text, Image, Pressable, Switch } from "react-native";

// import local components here

export default function Settings(props) {
    const [switchIsEnabled, setSwitchIsEnabled] = useState(false)
    const toggleSwitch = () => setSwitchIsEnabled(previousState => !previousState);

    return (
        <View
            style={StyleSheet.screenContainer}>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={switchIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={switchIsEnabled}
            />
        </View>
    );
}