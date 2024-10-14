import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface ProgressBarProps {
    progress: number;  // Percentage of progress (0-100)
    showLabel?: boolean;  // Option to show percentage label
    height?: number;  // Height of the progress bar
    color?: string;  // Custom color for the progress bar
    backgroundColor?: string;  // Background color for the bar
    style?: ViewStyle;  // Custom styles for the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({
                                                     progress,
                                                     showLabel = true,
                                                     height = 10,
                                                     color,
                                                     backgroundColor,
                                                     style,
                                                 }) => {
    const theme = useTheme();
    const progressColor = color || theme.colors.primary;
    const barBackgroundColor = backgroundColor || theme.colors.background;

    return (
        <View style={[styles.container, { height, backgroundColor: barBackgroundColor }, style]}>
            <View style={[styles.progress, { width: `${progress}%`, backgroundColor: progressColor, height }]} />
            {showLabel && <Text style={[styles.label, { color: theme.colors.text }]}>{`${progress}%`}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
        position: 'relative',
    },
    progress: {
        borderRadius: 5,
    },
    label: {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: [{ translateX: -25 }],
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ProgressBar;
