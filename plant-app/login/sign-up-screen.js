import StyleSheet from '../styles/global-stylesheet'
import * as React from "react";
import { View, Text, Image, Pressable, TextInput, } from "react-native";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { account, ID } from '../lib/app-write';

// import local components here

export default function SignUpScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async() => {
        await account.create(ID.unique(), email, password, username);
        console.log('Email: ' + email);
        console.log('Username: ' + username);
        console.log('Password: ' + password);
    }

    return (
        <View style={StyleSheet.screenContainer}>
            <Text style={StyleSheet.loginTitle}>Welcome!</Text>

            <TextInput
                style={StyleSheet.loginUsername}
                placeholder='email'
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput
                style={StyleSheet.loginUsername}
                placeholder='username'
                placeholderTextColor="#888"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={StyleSheet.loginPassword}
                placeholder='password'
                placeholderTextColor="#888"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
            />

            <Pressable style={StyleSheet.loginSubmit} onPress={handleSignUp}>
                <Text style={StyleSheet.loginSubmitText}>Sign up</Text>
            </Pressable>

        </View>
    );
}