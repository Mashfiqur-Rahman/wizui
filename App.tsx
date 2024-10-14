import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Carousel from './src/components/DisplayComponents/Carousel/Carousel';

export default function App() {
    return (
        <ScrollView style={styles.container}>
            {/* Carousel Example */}
            <Text style={styles.sectionHeader}>Carousel</Text>
            <Carousel autoScroll={true} scrollInterval={2000}>  {/* Enable auto-scroll */}
                <View style={styles.carouselItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.carouselItem}>
                    <Text>Item 2</Text>
                </View>
                <View style={styles.carouselItem}>
                    <Text>Item 3</Text>
                </View>
            </Carousel>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    carouselItem: {
        width: 300,
        height: 200,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
    },
});
