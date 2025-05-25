import React, { useState } from 'react';
import StyleSheet from '../styles/global-stylesheet'
import { View, Text, Image, Pressable, Switch } from "react-native";
import { useContext } from 'react';
import { AuthContext } from '../auth-context';
import { account } from '../lib/app-write';

// import local components here

export default function Settings(props) {
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleLogout = async () => {
        try{
            await account.deleteSession('current');
            setIsLoggedIn(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={StyleSheet.screenContainer}>
            <Pressable 
                onPress={handleLogout}
                style={StyleSheet.loginSubmit}>
                <Text style={StyleSheet.loginSubmitText}>
                    Log Out
                </Text>
            </Pressable>
        </View>
    );
}