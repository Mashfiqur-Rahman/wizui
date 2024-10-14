import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import Button from "../../FormComponents/Button/Button";

interface AlertProps {
    visible: boolean;
    title?: string;
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    style?: ViewStyle;
}

const Alert: React.FC<AlertProps> = ({
                                         visible,
                                         title = 'Alert',
                                         message,
                                         type = 'info',
                                         onConfirm,
                                         onCancel,
                                         confirmText = 'OK',
                                         cancelText = 'Cancel',
                                         style,
                                     }) => {
    const theme = useTheme();

    if (!visible) return null;

    const backgroundColor = getBackgroundColor(type, theme);

    return (
        <View style={[styles.alertContainer, { backgroundColor }, style]}>
            {title && <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>}
            <Text style={[styles.message, { color: theme.colors.text }]}>{message}</Text>
            <View style={styles.buttonContainer}>
                {onCancel && <Button title={cancelText} onPress={onCancel} color={theme.colors.error} />}
                <Button title={confirmText} onPress={onConfirm} color={theme.colors.primary} />
            </View>
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
    alertContainer: {
        position: 'absolute',
        top: '40%',
        left: '10%',
        right: '10%',
        padding: 20,
        borderRadius: 8,
        elevation: 5,
        zIndex: 1000,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default Alert;
