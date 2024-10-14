import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Toast from './src/components/FeedbackComponents/Toast/Toast';

export default function App() {
    const [toastVisible, setToastVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title="Show Success Toast" onPress={() => setToastVisible(true)} />

            <Toast
                message="Operation successful!"
                visible={toastVisible}
                onDismiss={() => setToastVisible(false)}
                type="error"
                duration={3000}
                position="bottom"
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
