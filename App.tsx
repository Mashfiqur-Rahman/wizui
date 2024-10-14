import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Alert from './src/components/FeedbackComponents/Alert/Alert';
import Button from "./src/components/FormComponents/Button/Button";

export default function App() {
    const [alertVisible, setAlertVisible] = useState(false);

    const handleConfirm = () => {
        setAlertVisible(false);
        console.log('Confirmed');
    };

    const handleCancel = () => {
        setAlertVisible(false);
        console.log('Cancelled');
    };

    return (
        <View style={styles.container}>
            <Button title="Show Alert" onPress={() => setAlertVisible(true)} />

            <Alert
                visible={alertVisible}
                title="Delete Confirmation"
                message="Are you sure you want to delete this item?"
                type="warning"
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                confirmText="Delete"
                cancelText="Cancel"
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
