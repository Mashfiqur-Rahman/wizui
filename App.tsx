import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from './src/components/LayoutComponents/Modal/Modal';
import Button from "./src/components/FormComponents/Button/Button";

export default function App() {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title="Open Modal" onPress={() => setModalVisible(true)} />

            <Modal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                header={<Text style={styles.headerText}>Confirm Action</Text>}
                body={<Text style={styles.bodyText}>Are you sure you want to perform this action?</Text>}
                footer={(
                    <>
                        <Button title="Cancel" onPress={() => setModalVisible(false)} />
                        <Button title="Confirm" onPress={() => console.log('Action confirmed')} />
                    </>
                )}
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
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bodyText: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
});
