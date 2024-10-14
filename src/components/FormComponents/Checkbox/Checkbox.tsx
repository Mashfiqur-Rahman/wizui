import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';  // Adjust path as needed
import { FontAwesome } from '@expo/vector-icons';

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    errorMessage?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange, errorMessage }) => {
    const theme = useTheme();

    const handlePress = () => {
        if (onChange) {
            onChange(!checked);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkboxContainer} onPress={handlePress}>
                <View style={[styles.checkbox, { borderColor: errorMessage ? theme.colors.error : theme.colors.primary }]}>
                    {checked && (
                        <FontAwesome name="check" size={16} color={theme.colors.primary} />
                    )}
                </View>
                {label && <Text style={styles.label}>{label}</Text>}
            </TouchableOpacity>
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
    error: {
        marginTop: 5,
        color: '#ff4d4f',
        fontSize: 12,
    },
});

export default Checkbox;
