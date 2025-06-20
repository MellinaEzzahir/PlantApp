import { createStyles } from "../styles/global-stylesheet";
import * as React from "react";
import { View, Text, Image, Pressable, TextInput, } from "react-native";
import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../auth-context';
import { account } from '../lib/app-write'

// import local components here

export default function LoginScreen() {
    const { theme } = useContext(AuthContext);
    const StyleSheet = createStyles(theme);
    const navigation = useNavigation();
    const { setIsLoggedIn } = useContext(AuthContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        try {
            await account.createEmailPasswordSession(
                email,
                password,
            );
            setIsLoggedIn(true);
        } catch (err) {
            alert('Login failed! ' + err.message);
        }
    };

    const handleDemoLogin = async () => {
        try {
            await account.createEmailPasswordSession(
                'demo@demo.com',
                'demodemo'
            );
            setIsLoggedIn(true);
        } catch (err) {
            alert('Login failed! ' + err.message);
        }
    };

    return (
        <View style={StyleSheet.screenContainer}>
            <Text style={StyleSheet.loginTitle}>Welcome Back!</Text>
            <Pressable onPress={handleDemoLogin}>
                <Text style={StyleSheet.demoAccountLoginLink}>Use a demo account</Text>
            </Pressable>

            <TextInput
                style={StyleSheet.loginUsername}
                placeholder='email'
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
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

            <Pressable style={StyleSheet.loginSubmit} onPress={handleLogin}>
                <Text style={StyleSheet.loginSubmitText}>Login</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={StyleSheet.footerText}>Sign up instead</Text>
            </Pressable>
            <Text style={StyleSheet.footerText}>Forgot your password?</Text>
        </View>
    );
}