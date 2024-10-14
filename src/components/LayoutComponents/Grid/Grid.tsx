import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface GridProps {
    style?: ViewStyle;
    children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children, style }) => {
    return <View style={[styles.grid, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default Grid;
