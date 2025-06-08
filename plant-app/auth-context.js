import React, { createContext, useState, useEffect } from 'react'
import { account } from './lib/app-write'
import { lightTheme, darkTheme } from './styles/theme';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const user = await account.get();
                setIsLoggedIn(true)
            } catch (error) {
                console.log('User is not logged in:' + error)
                setIsLoggedIn(false);
            }
        }
        checkLoggedIn();
    }, []);

    const toggleTheme = () => setIsDarkMode(prev => !prev);
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            isDarkMode,
            toggleTheme,
            theme,
        }}>
            {children}
        </AuthContext.Provider>
    );
}