import { createStyles } from "../styles/global-stylesheet";
import * as React from "react";
import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { account, ID } from '../lib/app-write';
import { AuthContext } from '../auth-context';

export default function SignUpScreen() {
    const { theme } = useContext(AuthContext);
    const StyleSheet = createStyles(theme);

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

    const { setIsLoggedIn } = useContext(AuthContext);

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
        if ((password !== '' || email !== '') && name === '') {
            setNameError('Name cannot be empty');
            setValidName(false);
        } else {
            setNameError('');
            setValidName(true);
        }
    }, [password, email, name]);

    useEffect(() => {
        const isEverythingValid = validEmail && validPassword && name.trim() !== '';
        setValidLogin(isEverythingValid);
    }, [validEmail, validPassword]);

    const handleSignUp = async () => {
        if (validLogin) {
            try {
                await account.create(ID.unique(), email, password, name);
                await account.createEmailSession(email, password);
                Alert.alert("Success", "Account created!");
                setIsLoggedIn(true);
            } catch (error) {
                if (error.code === 409) {
                    try {
                        await account.createEmailSession(email, password);
                        Alert.alert("Welcome back!");
                        setIsLoggedIn(true);
                    } catch (loginError) {
                        Alert.alert(
                            "Email already in use",
                            "That email is already registered. Please check your password or go to the login screen."
                        );
                    }
                } else {
                    Alert.alert("Error", error.message || "Something went wrong.");
                }
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