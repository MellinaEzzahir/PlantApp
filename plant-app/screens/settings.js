import { useState } from 'react';
import { View, Text, Pressable, Switch } from "react-native";
import { useContext } from 'react';
import { AuthContext } from '../auth-context';
import { account } from '../lib/app-write';
import { createStyles } from "../styles/global-stylesheet";

// import local components here

export default function Settings(props) {
    const { setIsLoggedIn } = useContext(AuthContext);
    const { isDarkMode, toggleTheme, theme } = useContext(AuthContext);
    const StyleSheet = createStyles(theme);

    const handleLogout = async () => {
        try {
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
            <Text>Dark Mode</Text>
            <Switch
                trackColor={{
                    false: theme.colors.primary, // neutral grey fallback since no border color was defined
                    true: theme.colors.primary
                }}
                thumbColor={isDarkMode ? theme.colors.secondary : theme.colors.secondary}
                value={isDarkMode}
                onValueChange={toggleTheme}
            />
        </View>
    );
}