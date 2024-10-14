import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';  // Adjust path as needed
import { FontAwesome } from '@expo/vector-icons';

interface RadioButtonProps {
    label: string;
    value: string;
    selected?: boolean;
    onSelect?: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, selected = false, onSelect }) => {
    const theme = useTheme();

    return (
        <TouchableOpacity style={styles.radioContainer} onPress={() => onSelect && onSelect(value)}>
            <View style={[styles.radio, { borderColor: theme.colors.primary }]}>
                {selected && <View style={[styles.radioSelected, { backgroundColor: theme.colors.primary }]} />}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radio: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radioSelected: {
        height: 12,
        width: 12,
        borderRadius: 6,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
});

export default RadioButton;
