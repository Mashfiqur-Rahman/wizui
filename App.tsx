import React from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import Card from './src/components/LayoutComponents/Card/Card';

export default function App() {
    return (
        <View style={styles.container}>
            <Card
                header={(
                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>Beautiful Sunset</Text>
                    </View>
                )}
                body={(
                    <View>
                        <Image source={{ uri: 'https://example.com/sunset.jpg' }} style={styles.image} />
                        <Text style={styles.bodyText}>Enjoy the stunning view of the sunset from the mountains.</Text>
                    </View>
                )}
                footer={(
                    <View style={styles.footerContent}>
                        <Button title="Learn More" onPress={() => Alert.alert('Learn More clicked')} />
                        <Button title="Buy Now" onPress={() => Alert.alert('Buy Now clicked')} />
                    </View>
                )}
            />

            <Card
                header={(
                    <Text style={styles.headerText}>Mountain Adventure</Text>
                )}
                body={(
                    <Text style={styles.bodyText}>Explore the thrill of mountain hiking and breathtaking views.</Text>
                )}
                footer={(
                    <Button title="Details" onPress={() => Alert.alert('Details clicked')} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginVertical: 10,
    },
    bodyText: {
        fontSize: 14,
        lineHeight: 20,
    },
    footerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
