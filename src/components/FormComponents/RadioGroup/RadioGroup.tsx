import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';

interface Option {
    label: string;
    value: string;
}

interface RadioGroupProps {
    options: Option[];
    selectedValue?: string;
    onValueChange?: (value: string) => void;
    label?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, selectedValue, onValueChange, label }) => {
    const [selected, setSelected] = useState(selectedValue || '');

    const handleSelect = (value: string) => {
        setSelected(value);
        if (onValueChange) {
            onValueChange(value);
        }
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.groupLabel}>{label}</Text>}
            {options.map((option) => (
                <RadioButton
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    selected={selected === option.value}
                    onSelect={handleSelect}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    groupLabel: {
        marginBottom: 5,
        color: '#333',
        fontSize: 16,
    },
});

export default RadioGroup;
