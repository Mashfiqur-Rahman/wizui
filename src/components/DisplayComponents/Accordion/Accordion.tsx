import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    style?: ViewStyle;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, style }) => {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    return (
        <View style={[styles.container, style]}>
            <Pressable onPress={toggleAccordion} style={styles.header}>
                <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
            </Pressable>
            {expanded && <View style={styles.content}>{children}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    header: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
});

export default Accordion;