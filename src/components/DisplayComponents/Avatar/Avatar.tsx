import React from 'react';
import { View, Image, Text, StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import { FontAwesome } from '@expo/vector-icons';

interface AvatarProps {
    image?: ImageSourcePropType;  // Optional image source for avatar
    size?: number;  // Size of the avatar (default: 50)
    initials?: string;  // Initials to show if no image is provided
    icon?: string;  // Icon name to show if no image or initials are provided
    backgroundColor?: string;  // Custom background color (if no image)
    textColor?: string;  // Custom text color (for initials)
    style?: ViewStyle;
}

const Avatar: React.FC<AvatarProps> = ({
    image,
    size = 50,
    initials,
    icon,
    backgroundColor,
    textColor,
    style,
}) => {
    const theme = useTheme();
    const bg = backgroundColor || theme.colors.primary;
    const color = textColor || theme.colors.text;

    return (
        <View
            style={[
                styles.avatarContainer,
                { backgroundColor: bg, width: size, height: size, borderRadius: size / 2 },
                style,
            ]}
        >
            {image ? (
                <Image
                    source={image}
                    style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
                    resizeMode="cover"
                />
            ) : initials ? (
                <Text style={[styles.initials, { color, userSelect: 'none' }]}>{initials}</Text>
            ) : (
                icon && <FontAwesome name={icon} size={size * 0.5} color={color} style={{ userSelect: 'none' }} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        // Removed resizeMode from styles
    },
    initials: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Avatar;