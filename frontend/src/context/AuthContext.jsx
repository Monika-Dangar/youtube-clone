import React, { createContext, useContext, useEffect, useState } from 'react';

// Create context
const AuthContext = createContext();

// Hook for easy use
export const useAuth = () => useContext(AuthContext);

// Provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store user object

    // Load from localStorage on app start
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', userData.token); // Optional: if you use JWT
        setUser(userData);
    };

    return (
        <AuthContext.Provider value={{ user, login, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};
