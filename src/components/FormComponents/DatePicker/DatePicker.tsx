import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';  // For iOS/Android
import { useTheme } from '../../../theme/ThemeProvider';

interface CustomDatePickerProps {
    label?: string;
    selectedDate?: Date;
    onDateChange?: (date: Date) => void;
    minimumDate?: Date;
    maximumDate?: Date;
    errorMessage?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
                                                               label,
                                                               selectedDate,
                                                               onDateChange,
                                                               minimumDate,
                                                               maximumDate,
                                                               errorMessage,
                                                           }) => {
    const [date, setDate] = useState(selectedDate || new Date());
    const [show, setShow] = useState(false);
    const theme = useTheme();

    const handleConfirm = (event: any, selectedDate?: Date) => {
        setShow(false);
        if (selectedDate) {
            setDate(selectedDate);
            if (onDateChange) {
                onDateChange(selectedDate);
            }
        }
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            {Platform.OS === 'web' ? (
                // Web-specific Date Input
                <input
                    type="date"
                    value={date.toISOString().substring(0, 10)} // Format date to YYYY-MM-DD
                    onChange={(e) => {
                        const selectedDate = new Date(e.target.value);
                        setDate(selectedDate);
                        if (onDateChange) onDateChange(selectedDate);
                    }}
                    style={styles.webInput}
                />
            ) : (
                // iOS/Android-specific Date Picker
                <TouchableOpacity
                    style={[styles.inputContainer, { borderColor: errorMessage ? theme.colors.error : theme.colors.primary }]}
                    onPress={() => setShow(true)}
                >
                    <Text style={styles.inputText}>{date.toDateString()}</Text>
                </TouchableOpacity>
            )}

            {show && Platform.OS !== 'web' && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                    onChange={handleConfirm}
                />
            )}

            {errorMessage && <Text style={[styles.error, { color: theme.colors.error }]}>{errorMessage}</Text>}
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    inputText: {
        fontSize: 16,
        color: '#333',
    },
    webInput: {
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    error: {
        marginTop: 5,
        fontSize: 12,
    },
});

export default CustomDatePicker;
