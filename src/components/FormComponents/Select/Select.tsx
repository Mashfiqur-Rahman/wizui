import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';  // Adjusted import path
import { FontAwesome } from '@expo/vector-icons';

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    label?: string;
    options: Option[];
    placeholder?: string;
    selectedValue?: string;
    onValueChange?: (value: string) => void;
    errorMessage?: string;
    leftIconName?: keyof typeof FontAwesome.glyphMap;  // Optional left icon
}

const Select: React.FC<SelectProps> = ({
                                           label,
                                           options,
                                           placeholder = 'Select an option',
                                           selectedValue,
                                           onValueChange,
                                           errorMessage,
                                           leftIconName,
                                       }) => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState(
        options.find((option) => option.value === selectedValue)?.label || ''
    );

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (selected: Option) => {
        setSelectedLabel(selected.label);
        setIsOpen(false);
        if (onValueChange) {
            onValueChange(selected.value);
        }
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TouchableOpacity
                style={[styles.selectBox, { borderColor: errorMessage ? theme.colors.error : theme.colors.borderColor }]}
                onPress={toggleDropdown}
            >
                {leftIconName && (
                    <FontAwesome name={leftIconName} size={20} color={theme.colors.icon} style={styles.leftIcon} />
                )}
                <Text style={styles.selectedText}>{selectedLabel || placeholder}</Text>
                <FontAwesome
                    name={isOpen ? 'chevron-up' : 'chevron-down'}
                    size={16}
                    color={theme.colors.icon}
                    style={styles.rightIcon}
                />
            </TouchableOpacity>

            {isOpen && (
                <View style={styles.dropdown}>
                    <FlatList
                        data={options}
                        keyExtractor={(item) => item.value}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
                                <Text style={styles.optionText}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}

            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        marginBottom: 5,
        color: '#333',
        fontSize: 14,
    },
    selectBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    selectedText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    leftIcon: {
        marginRight: 10,
    },
    rightIcon: {
        marginLeft: 10,
    },
    dropdown: {
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        maxHeight: 150,
    },
    option: {
        padding: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    error: {
        marginTop: 5,
        color: '#ff4d4f',
        fontSize: 12,
    },
});

export default Select;
