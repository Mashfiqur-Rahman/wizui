import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface ToastProps {
    message: string;
    visible: boolean;
    onDismiss: () => void;
    duration?: number;  // Duration in milliseconds (default: 3000)
    position?: 'top' | 'bottom';  // Toast position (default: bottom)
    type?: 'success' | 'error' | 'warning';  // Toast type (for styling)
    style?: ViewStyle;
}

const Toast: React.FC<ToastProps> = ({
                                         message,
                                         visible,
                                         onDismiss,
                                         duration = 3000,
                                         position = 'bottom',
                                         type = 'success',
                                         style,
                                     }) => {
    const theme = useTheme();
    const [opacity] = React.useState(new Animated.Value(0));

    useEffect(() => {
        if (visible) {
            // Fade in the toast
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();

            // Automatically dismiss after the specified duration
            const timer = setTimeout(() => {
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => {
                    onDismiss();
                });
            }, duration);

            // Cleanup timer on unmount
            return () => clearTimeout(timer);
        }
    }, [visible, duration, opacity, onDismiss]);

    if (!visible) return null;

    const backgroundColor = getBackgroundColor(type, theme);

    return (
        <Animated.View style={[styles.toastContainer, { opacity, backgroundColor, [position]: 50 }, style]}>
            <Text style={[styles.message, { color: theme.colors.text }]}>{message}</Text>
        </Animated.View>
    );
};

const getBackgroundColor = (type: 'success' | 'error' | 'warning', theme: any) => {
    switch (type) {
        case 'success':
            return theme.colors.success || 'green';
        case 'error':
            return theme.colors.error || 'red';
        case 'warning':
            return theme.colors.warning || 'orange';
        default:
            return theme.colors.primary || 'blue';
    }
};

const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        left: '10%',
        right: '10%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Toast;
