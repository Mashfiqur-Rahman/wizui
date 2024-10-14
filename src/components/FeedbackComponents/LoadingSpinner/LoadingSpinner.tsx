import React from 'react';
import { ActivityIndicator, View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface LoadingSpinnerProps {
    size?: 'small' | 'large' | number;  // Size of the spinner
    color?: string;  // Color of the spinner
    style?: ViewStyle;  // Custom styles for the spinner container
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'large', color, style }) => {
    const theme = useTheme();
    const spinnerColor = color || theme.colors.primary;

    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator size={size} color={spinnerColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingSpinner;
