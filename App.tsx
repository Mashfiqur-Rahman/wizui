import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './src/components/LayoutComponents/Avatar/Avatar';

export default function App() {
    return (
        <View style={styles.container}>
            {/* Avatar with image */}
            <Avatar image={{ uri: 'https://example.com/profile.jpg' }} size={80} />

            {/* Avatar with initials */}
            <Avatar initials="JD" size={60} backgroundColor="purple" textColor="white" />

            {/* Avatar with icon */}
            <Avatar icon="user" size={50} backgroundColor="gray" />
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
