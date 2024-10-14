import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface CardProps {
    header?: React.ReactNode;  // Accepts custom header content
    body?: React.ReactNode;  // Accepts custom body content
    footer?: React.ReactNode;  // Accepts custom footer content
    style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ header, body, footer, style }) => {
    const theme = useTheme();

    return (
        <View style={[styles.card, { backgroundColor: theme.colors.background }, style]}>
            {header && <View style={styles.header} >{header}</View>}
            {body && <View style={styles.body} role="main">{body}</View>}
            {footer && <View style={styles.footer} role="contentinfo">{footer}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        marginVertical: 10,
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    body: {
        padding: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
});

export default Card;