import React, { createContext, useState, useEffect } from 'react'
import { account } from './lib/app-write'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        console.log('App just opened!');
        const checkLoggedIn = async () => {
            try {
                const user = await account.get();
                console.log('User is logged in:' + user)
                setIsLoggedIn(true)
            } catch (error) {
                console.log('User is not logged in:' + error)
                setIsLoggedIn(false);
            }
        }
        checkLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}