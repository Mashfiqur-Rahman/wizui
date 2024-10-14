import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';  // Adjust the path if necessary

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const theme = useTheme();

    console.log('tabs', tabs)
    return (
        <View style={styles.container}>
            {/* Render Tab Labels */}
            <View style={styles.tabBar}>
                {tabs.map((tab, index) => (
                    <Pressable
                        key={index}
                        style={[
                            styles.tab,
                            activeTabIndex === index && {
                                borderBottomColor: theme.colors.primary,
                                borderBottomWidth: 2,
                            },
                        ]}
                        onPress={() => setActiveTabIndex(index)}
                    >
                        <Text
                            style={[
                                styles.tabLabel,
                                { color: activeTabIndex === index ? theme.colors.primary : theme.colors.secondary },
                            ]}
                        >
                            {tab.label}
                        </Text>
                    </Pressable>
                ))}
            </View>

            {/* Render Tab Content */}
            <View style={styles.tabContent}>
                {tabs[activeTabIndex].content}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tab: {
        paddingVertical: 10,
    },
    tabLabel: {
        fontSize: 16,
        color: '#333',
    },
    tabContent: {
        flex: 1,
        padding: 20,
    },
});

export default Tabs;