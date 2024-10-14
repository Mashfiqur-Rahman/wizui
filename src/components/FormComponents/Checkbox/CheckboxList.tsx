import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';  // Assuming Checkbox component exists
import { useTheme } from '../../../theme/ThemeProvider';

interface Option {
    label: string;
    value: string;
}

interface CheckboxListProps {
    options: Option[];
    minSelected: number;
    maxSelected: number;
    onSelectionChange?: (selectedValues: string[]) => void;
}

const CheckboxList: React.FC<CheckboxListProps> = ({ options, minSelected, maxSelected, onSelectionChange }) => {
    const [selected, setSelected] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const theme = useTheme();

    const handleCheckboxChange = (value: string, checked: boolean) => {
        let newSelected = [...selected];

        if (checked) {
            // Add value to the selected list
            if (newSelected.length < maxSelected) {
                newSelected.push(value);
            } else {
                setErrorMessage(`You can select a maximum of ${maxSelected} items.`);
                return;
            }
        } else {
            // Remove value from the selected list
            newSelected = newSelected.filter((item) => item !== value);
        }

        setSelected(newSelected);
        setErrorMessage('');

        // Check if the number of selected items is below the minimum
        if (newSelected.length < minSelected) {
            setErrorMessage(`Please select at least ${minSelected} items.`);
        }

        if (onSelectionChange) {
            onSelectionChange(newSelected);
        }
    };

    return (
        <View style={styles.container}>
            {options.map((option) => (
                <Checkbox
                    key={option.value}
                    label={option.label}
                    checked={selected.includes(option.value)}
                    onChange={(checked) => handleCheckboxChange(option.value, checked)}
                />
            ))}
            {errorMessage && <Text style={[styles.error, { color: theme.colors.error }]}>{errorMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    error: {
        marginTop: 10,
        fontSize: 12,
    },
});

export default CheckboxList;
