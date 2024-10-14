import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';  // For iOS/Android
import { useTheme } from '../../../theme/ThemeProvider';

interface CustomTimePickerProps {
    label?: string;
    selectedTime?: Date;
    onTimeChange?: (date: Date) => void;
    errorMessage?: string;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
                                                               label,
                                                               selectedTime,
                                                               onTimeChange,
                                                               errorMessage,
                                                           }) => {
    const [time, setTime] = useState(selectedTime || new Date());
    const [show, setShow] = useState(false);
    const theme = useTheme();

    const handleConfirm = (event: any, selectedDate?: Date) => {
        setShow(false);
        if (selectedDate) {
            setTime(selectedDate);
            if (onTimeChange) {
                onTimeChange(selectedDate);
            }
        }
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            {Platform.OS === 'web' ? (
                // Web-specific Time Input
                <input
                    type="time"
                    value={time.toTimeString().substring(0, 5)}  // Format time as HH:MM
                    onChange={(e) => {
                        const [hours, minutes] = e.target.value.split(':');
                        const selectedTime = new Date();
                        selectedTime.setHours(parseInt(hours), parseInt(minutes));
                        setTime(selectedTime);
                        if (onTimeChange) onTimeChange(selectedTime);
                    }}
                    style={styles.webInput}
                />
            ) : (
                // iOS/Android-specific Time Picker
                <TouchableOpacity
                    style={[styles.inputContainer, { borderColor: errorMessage ? theme.colors.error : theme.colors.primary }]}
                    onPress={() => setShow(true)}
                >
                    <Text style={styles.inputText}>{`${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`}</Text>
                </TouchableOpacity>
            )}

            {show && Platform.OS !== 'web' && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    display="default"
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

export default CustomTimePicker;
