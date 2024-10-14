import React from 'react';
import { Modal as RNModal, View, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { FontAwesome } from '@expo/vector-icons';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    style?: ViewStyle;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose, header, body, footer, style }) => {
    const theme = useTheme();

    return (
        <RNModal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={[styles.modalContainer, { backgroundColor: theme.colors.background }, style]}>
                    {header && <View style={styles.header}>{header}</View>}
                    {body && <View style={styles.body}>{body}</View>}
                    {footer && <View style={styles.footer}>{footer}</View>}
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <FontAwesome name="times" size={24} color={theme.colors.text} />
                    </Pressable>
                </View>
            </View>
        </RNModal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent overlay
        position: 'absolute',  // Ensure overlay covers the entire screen
        width: '100%',
        height: '100%',
        zIndex: 1,  // Ensure the overlay is on top
    },
    modalContainer: {
        width: '80%',
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 2,  // Ensure modal content is on top of the overlay
    },
    header: {
        marginBottom: 10,
    },
    body: {
        marginBottom: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 3,  // Ensure the close button is on top of the modal
    },
});

export default Modal;