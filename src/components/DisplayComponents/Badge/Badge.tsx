import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface BadgeProps {
    value?: number | string;  // Value to display in the badge (number or text)
    size?: number;  // Badge size (default: 24)
    backgroundColor?: string;  // Custom background color for the badge
    textColor?: string;  // Custom text color for the badge
    style?: ViewStyle;  // Custom style for the badge
}

const Badge: React.FC<BadgeProps> = ({
                                         value,
                                         size = 24,
                                         backgroundColor,
                                         textColor,
                                         style,
                                     }) => {
    const theme = useTheme();
    const bg = backgroundColor || theme.colors.primary;
    const color = textColor || theme.colors.text;

    return (
        <View
            style={[
                styles.badge,
                {
                    backgroundColor: bg,
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                },
                style,
            ]}
        >
            <Text style={[styles.text, { color }]}>
                {value}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Badge;
