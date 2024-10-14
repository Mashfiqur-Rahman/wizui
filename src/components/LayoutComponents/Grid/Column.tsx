import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface ColumnProps {
    style?: ViewStyle;
    size?: number;  // Optional column size (default is 1, full width)
    children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children, style, size = 1 }) => {
    return (
        <View style={[styles.column, style, { flex: size }]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    column: {
        paddingHorizontal: 8,
    },
});

export default Column;
