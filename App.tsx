import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Notification from './src/components/FeedbackComponents/Notification/Notification';

export default function App() {
    const [notificationVisible, setNotificationVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title="Show Notification" onPress={() => setNotificationVisible(true)} />

            {notificationVisible && (
                <Notification
                    message="This is an info notification!"
                    type="info"
                    position="top"
                    onClose={() => setNotificationVisible(false)}
                />
            )}
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
