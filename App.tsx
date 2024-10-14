import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Badge from "./src/components/LayoutComponents/Badge/Badge";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.iconWithBadge}>
                <FontAwesome name="bell" size={40} color="#333" />
                <Badge value={3} size={20} backgroundColor="red" textColor="white" style={styles.badgePosition} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWithBadge: {
        position: 'relative',
    },
    badgePosition: {
        position: 'absolute',
        top: -5,
        right: -10,
    },
});
