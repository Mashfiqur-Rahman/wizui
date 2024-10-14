import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ProgressBar from './src/components/FeedbackComponents/ProgressBar/ProgressBar';

export default function App() {
    const [progress, setProgress] = useState(0);

    const increaseProgress = () => {
        setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
    };

    return (
        <View style={styles.container}>
            <ProgressBar progress={progress} showLabel={true} height={15} />
            <Button title="Increase Progress" onPress={increaseProgress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
});
