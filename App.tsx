import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Breadcrumbs from './src/components/NavigationComponents/Breadcrumbs/Breadcrumbs';

export default function App() {
    const breadcrumbs = [
        { label: 'Home', onPress: () => Alert.alert('Navigate to Home') },
        { label: 'Category', onPress: () => Alert.alert('Navigate to Category') },
        { label: 'Product', onPress: () => Alert.alert('Navigate to Product') },
    ];

    return (
        <View style={styles.container}>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
});
