import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface CheckboxListProps {
    options: { label: string; value: string }[];
    minSelected?: number;
    maxSelected?: number;
    onSelectionChange: (values: string[]) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ options, minSelected, maxSelected, onSelectionChange }) => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
    const theme = useTheme();

    const handleSelect = (value: string) => {
        let newSelectedValues = [...selectedValues];
        if (newSelectedValues.includes(value)) {
            newSelectedValues = newSelectedValues.filter((v) => v !== value);
        } else {
            newSelectedValues.push(value);
        }

        if (minSelected && newSelectedValues.length < minSelected) {
            return;
        }

        if (maxSelected && newSelectedValues.length > maxSelected) {
            return;
        }

        setSelectedValues(newSelectedValues);
        onSelectionChange(newSelectedValues);
    };

    return (
        <View style={styles.container}>
            {options.map((option) => (
                <TouchableOpacity
                    key={option.value}
                    style={styles.optionContainer}
                    onPress={() => handleSelect(option.value)}
                >
                    <View style={[styles.checkbox, selectedValues.includes(option.value) && styles.checkedCheckbox]}>
                        {selectedValues.includes(option.value) && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <Text style={styles.label}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkedCheckbox: {
        backgroundColor: '#007AFF',
    },
    checkmark: {
        color: '#fff',
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
});

export default CheckboxList;