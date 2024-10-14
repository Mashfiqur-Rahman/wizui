import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface TagsProps {
    tags: string[];
    style?: ViewStyle;
}

const Tags: React.FC<TagsProps> = ({ tags, style }) => {
    return (
        <View style={[styles.tagsContainer, style]}>
            {tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        margin: 5,
    },
    tagText: {
        fontSize: 14,
        color: '#333',
    },
});

export default Tags;
