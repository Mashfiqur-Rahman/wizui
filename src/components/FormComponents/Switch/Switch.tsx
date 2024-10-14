import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';  // Adjust path as needed

interface SwitchProps {
    label?: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
    disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ label, value, onValueChange, disabled = false }) => {
    const theme = useTheme();

    const handleToggle = () => {
        if (!disabled) {
            onValueChange(!value);
        }
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TouchableOpacity
                style={[
                    styles.switchContainer,
                    { backgroundColor: value ? theme.colors.primary : theme.colors.secondary },
                    disabled && styles.disabled,
                ]}
                onPress={handleToggle}
                activeOpacity={disabled ? 1 : 0.7}
            >
                <View
                    style={[
                        styles.circle,
                        { transform: [{ translateX: value ? 20 : 0 }] },
                        { backgroundColor: theme.colors.formComponentBackground },
                    ]}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    label: {
        marginRight: 10,
        fontSize: 16,
        color: '#333',
    },
    switchContainer: {
        width: 50,
        height: 24,
        borderRadius: 12,
        padding: 2,
        justifyContent: 'center',
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    disabled: {
        opacity: 0.5,
    },
});

export default Switch;
