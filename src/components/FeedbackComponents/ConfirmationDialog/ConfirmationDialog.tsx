import React from 'react';
import { View, Text, Modal, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import Button from "../../FormComponents/Button/Button";

interface ConfirmationDialogProps {
    visible: boolean;
    title?: string;
    message?: string;
    onConfirm: () => void;
    onCancel: () => void;
    confirmText?: string;
    cancelText?: string;
    style?: ViewStyle;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
                                                                   visible,
                                                                   title = 'Confirm',
                                                                   message = 'Are you sure you want to proceed?',
                                                                   onConfirm,
                                                                   onCancel,
                                                                   confirmText = 'Confirm',
                                                                   cancelText = 'Cancel',
                                                                   style,
                                                               }) => {
    const theme = useTheme();

    return (
        <Modal transparent={true} visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={[styles.dialogContainer, { backgroundColor: theme.colors.background }, style]}>
                    {title && <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>}
                    {message && <Text style={[styles.message, { color: theme.colors.text }]}>{message}</Text>}
                    <View style={styles.buttonContainer}>
                        <Button title={cancelText} onPress={onCancel} color={theme.colors.error} />
                        <Button title={confirmText} onPress={onConfirm} color={theme.colors.primary} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialogContainer: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
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

export default ConfirmationDialog;
