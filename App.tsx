import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tooltip from './src/components/DisplayComponents/Tooltip/Tooltip';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <Tooltip content="This is a bell icon" position="top">
                <FontAwesome name="bell" size={40} color="#333" />
            </Tooltip>

            <Tooltip content="Search icon here" position="bottom">
                <FontAwesome name="search" size={40} color="#333" />
            </Tooltip>

            <Tooltip content="Settings icon" position="right">
                <FontAwesome name="cog" size={40} color="#333" />
            </Tooltip>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 16,
    },
});
