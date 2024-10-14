import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface RowProps {
    style?: ViewStyle;
    children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children, style }) => {
    return <View style={[styles.row, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16,  // Default spacing between rows
    },
});

export default Row;
