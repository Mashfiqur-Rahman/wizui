import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface TooltipProps {
    content: string;  // Tooltip text or content
    children: React.ReactNode;  // Target element that triggers the tooltip
    position?: 'top' | 'bottom' | 'left' | 'right';  // Tooltip position (default: bottom)
    style?: ViewStyle;  // Custom style for the tooltip box
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'bottom', style }) => {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();

    const toggleTooltip = () => {
        setVisible(!visible);
    };

    const tooltipPositionStyle = getPositionStyle(position);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleTooltip} onLongPress={toggleTooltip}>
                {children}
            </TouchableOpacity>
            {visible && (
                <View style={[styles.tooltip, tooltipPositionStyle, { backgroundColor: theme.colors.background }, style]}>
                    <Text style={[styles.tooltipText, { color: theme.colors.text, userSelect: 'none' }]}>{content}</Text>
                </View>
            )}
        </View>
    );
};

const getPositionStyle = (position: 'top' | 'bottom' | 'left' | 'right'): ViewStyle => {
    switch (position) {
        case 'top':
            return { bottom: 100, marginBottom: 8 };
        case 'bottom':
            return { top: 100, marginTop: 8 };
        case 'left':
            return { right: 100, marginRight: 8 };
        case 'right':
            return { left: 100, marginLeft: 8 };
        default:
            return {};
    }
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',  // Tooltip relative to its container
    },
    tooltip: {
        position: 'absolute',
        padding: 8,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        zIndex: 1,  // Ensure tooltip is on top
    },
    tooltipText: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default Tooltip;