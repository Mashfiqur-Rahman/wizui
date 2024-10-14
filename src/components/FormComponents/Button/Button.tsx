import React from 'react';
import { TouchableOpacity, Text, View, TouchableOpacityProps, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../../../theme/ThemeProvider';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: 'primary' | 'secondary';
    iconName?: keyof typeof FontAwesome.glyphMap;
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary', iconName, iconPosition = 'left', ...rest }) => {
    const theme = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: theme.colors[variant] }]}
            {...rest}
        >
            <View style={styles.content}>
                {iconName && iconPosition === 'left' && (
                    <FontAwesome
                        testID="button-icon-left"  // Add testID for testing
                        name={iconName}
                        size={20}
                        color={theme.colors.icon}
                        style={styles.icon}
                    />
                )}
                <Text style={[styles.text, { color: theme.colors.text }]}>{title}</Text>
                {iconName && iconPosition === 'right' && (
                    <FontAwesome
                        testID="button-icon-right"  // Add testID for testing
                        name={iconName}
                        size={20}
                        color={theme.colors.icon}
                        style={styles.icon}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 5,
    },
    text: {
        textAlign: 'center',
    },
});

export default Button;
