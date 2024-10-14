import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface Breadcrumb {
    label: string;
    onPress: () => void;
}

interface BreadcrumbsProps {
    breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
    const theme = useTheme();

    return (
        <View style={styles.container}>
            {breadcrumbs.map((breadcrumb, index) => (
                <View style={styles.breadcrumbItem} key={index}>
                    <TouchableOpacity onPress={breadcrumb.onPress}>
                        <Text
                            style={[
                                styles.breadcrumbText,
                                { color: theme.colors.primary },
                            ]}
                        >
                            {breadcrumb.label}
                        </Text>
                    </TouchableOpacity>
                    {index < breadcrumbs.length - 1 && (
                        <Text style={[styles.separator, { color: theme.colors.text }]}>
                            {'>'}
                        </Text>  // Separator between breadcrumb items
                    )}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    breadcrumbItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    breadcrumbText: {
        fontSize: 16,
        textDecorationLine: 'underline',  // Optional: Underline to signify clickable link
    },
    separator: {
        marginHorizontal: 5,
        fontSize: 16,
        color: 'black',
    },
});

export default Breadcrumbs;
