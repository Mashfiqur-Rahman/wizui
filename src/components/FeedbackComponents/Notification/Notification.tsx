import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { FontAwesome } from '@expo/vector-icons';

interface NotificationProps {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';  // Notification type for styling
    onClose: () => void;  // Callback to close the notification
    position?: 'top' | 'bottom';  // Position on screen (default: top)
    style?: ViewStyle;  // Custom styles for the notification
}

const Notification: React.FC<NotificationProps> = ({
                                                       message,
                                                       type = 'info',
                                                       onClose,
                                                       position = 'top',
                                                       style,
                                                   }) => {
    const theme = useTheme();

    const backgroundColor = getBackgroundColor(type, theme);

    return (
        <View style={[styles.notificationContainer, { backgroundColor, [position]: 0 }, style]}>
            <Text style={[styles.message, { color: theme.colors.text }]}>{message}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <FontAwesome name="times" size={20} color={theme.colors.text} />
            </TouchableOpacity>
        </View>
    );
};

const getBackgroundColor = (type: 'success' | 'error' | 'warning' | 'info', theme: any) => {
    switch (type) {
        case 'success':
            return theme.colors.success || 'green';
        case 'error':
            return theme.colors.error || 'red';
        case 'warning':
            return theme.colors.warning || 'orange';
        case 'info':
            return theme.colors.primary || 'blue';
        default:
            return theme.colors.primary || 'blue';
    }
};

const styles = StyleSheet.create({
    notificationContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
        zIndex: 1000,  // Ensure notification is above other components
    },
    message: {
        fontSize: 16,
    },
    closeButton: {
        padding: 5,
    },
});

export default Notification;
