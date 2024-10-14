import React, { useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import ConfirmationDialog from './src/components/FeedbackComponents/ConfirmationDialog/ConfirmationDialog';
import Button from './src/components/FormComponents/Button/Button';

export default function App() {
    const [isDialogVisible, setDialogVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title="Show Confirmation" onPress={() => setDialogVisible(true)} />

            <ConfirmationDialog
                visible={isDialogVisible}
                title="Delete Item"
                message="Are you sure you want to delete this item?"
                confirmText="Delete"
                cancelText="Cancel"
                onConfirm={() => {
                    Alert.alert('Item deleted');
                    setDialogVisible(false);
                }}
                onCancel={() => setDialogVisible(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
