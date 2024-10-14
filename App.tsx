import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import LoadingSpinner from './src/components/FeedbackComponents/LoadingSpinner/LoadingSpinner';

export default function App() {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);  // Simulates a 3-second loading process
    };

    return (
        <View style={styles.container}>
            <Button title="Start Loading" onPress={startLoading} />

            {loading && <LoadingSpinner size="large" color="#4CAF50" />}
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
