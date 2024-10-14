import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

const defaultTheme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        text: 'black',
        textSecondary: '#999999',  // New: Used for placeholder text
        icon: '#6c757d',
        error: '#ff4d4f',  // New: Error color for validation
        borderColor: '#6c757d',
        formComponentBackground: '#f8f9fa',
    },
};

const ThemeContext = createContext(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode; theme?: object }> = ({ children, theme }) => {
    const mergedTheme = { ...defaultTheme, ...theme };

    return (
        <ThemeContext.Provider value={mergedTheme}>
            {children}
        </ThemeContext.Provider>
    );
};
