import React from 'react';
import { View, Text, Image, StyleSheet, Alert, Pressable } from 'react-native';
import Card from './src/components/LayoutComponents/Card/Card';
import Button from "./src/components/FormComponents/Button/Button";

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
                        <Pressable onPress={() =>  console.log('Learn More clicked')} style={styles.button}>
                            <Text style={styles.buttonText}>Learn More</Text>
                        </Pressable>
                        <Pressable onPress={() =>  console.log('Buy Now clicked')} style={styles.button}>
                            <Text style={styles.buttonText}>Buy Now</Text>
                        </Pressable>
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
                    <Button onPress={() => console.log('Details clicked')} style={styles.button} title={'Details'}/>
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
    button: {
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});