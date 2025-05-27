import StyleSheet from '../styles/global-stylesheet';
import * as React from "react";
import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { account, ID } from '../lib/app-write';

export default function SignUpScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [validEmail, setValidEmail] = useState(false);
    const [validName, setValidName] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [validLogin, setValidLogin] = useState(false);

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(email);
        if (email === '') {
            setEmailError('');
            setValidEmail(false);
        } else if (isEmailValid) {
            setEmailError('');
            setValidEmail(true);
        } else {
            setEmailError('Please enter a valid email address.');
            setValidEmail(false);
        }
    }, [email]);

    useEffect(() => {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        const isValidPassword = passwordRegex.test(password);
        if (password === '') {
            setPasswordError('');
            setValidPassword(false);
        } else if (isValidPassword) {
            setPasswordError('');
            setValidPassword(true);
        } else {
            setPasswordError('Password must be at least 8 characters, include a number and a special character.');
            setValidPassword(false);
        }
    }, [password]);

    useEffect(() => {
        const isEverythingValid = validEmail && validPassword;
        setValidLogin(isEverythingValid);
    }, [validEmail, , validPassword]);

    const handleSignUp = async () => {
        if (validLogin) {
            try {
                await account.create(ID.unique(), email, password, name);
                Alert.alert("Success", "Account created!");
                navigation.replace('Preferences');
            } catch (error) {
                Alert.alert("Error", error.message || "Something went wrong.");
            }
        } else {
            Alert.alert("Invalid", "Please fix the form before signing up.");
        }
    };

    return (
        <View style={StyleSheet.screenContainer}>
            <Pressable
                onPress={() => navigation.navigate('Login')}
                style={StyleSheet.backTextPress}>
                <Text style={StyleSheet.backText}> ← Go back to login</Text>
            </Pressable>
            <Text style={StyleSheet.loginTitle}>Welcome!</Text>

            <TextInput
                style={StyleSheet.loginUsername}
                placeholder='email'
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            {emailError ? <Text style={StyleSheet.wrongSignUpInfo}>{emailError}</Text> : null}

            <TextInput
                style={StyleSheet.loginUsername}
                placeholder='name'
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}
                autoCapitalize="none"
            />
            {nameError ? <Text style={StyleSheet.wrongSignUpInfo}>{nameError}</Text> : null}

            <TextInput
                style={StyleSheet.loginPassword}
                placeholder='password'
                placeholderTextColor="#888"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
            />
            {passwordError ? <Text style={StyleSheet.wrongSignUpInfo}>{passwordError}</Text> : null}

            <Pressable style={[
                StyleSheet.loginSubmit, { backgroundColor: validLogin ? '#4C5C3A' : '#8DB580' }]}
                onPress={handleSignUp}>
                <Text style={StyleSheet.loginSubmitText}>Sign up</Text>
            </Pressable>
        </View >
    );
}