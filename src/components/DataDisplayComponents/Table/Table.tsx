import React from 'react';
import { View, Text, ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';
import Button from '../../FormComponents/Button/Button';  // Custom button component

interface Column {
    title: string;
    dataIndex: string;
    render?: (value: any, row: any) => React.ReactNode;  // Custom render function for cell content
}

interface TableProps {
    columns: Column[];  // Column configuration
    data: any[];  // Data for the current page
    currentPage: number;  // Current page number
    totalPages: number;  // Total number of pages
    onNextPage: () => void;  // Function to handle the "Next" page action
    onPreviousPage: () => void;  // Function to handle the "Previous" page action
    style?: ViewStyle;
}

const Table: React.FC<TableProps> = ({
                                         columns,
                                         data,
                                         currentPage,
                                         totalPages,
                                         onNextPage,
                                         onPreviousPage,
                                         style,
                                     }) => {
    const theme = useTheme();

    return (
        <View style={[styles.tableContainer, style]}>
            <ScrollView horizontal>
                <View style={styles.table}>
                    {/* Render Column Headers */}
                    <View style={styles.headerRow}>
                        {columns.map((col) => (
                            <Text key={col.dataIndex} style={[styles.headerCell, { color: theme.colors.text }]}>
                                {col.title}
                            </Text>
                        ))}
                    </View>

                    {/* Render Table Rows */}
                    {data.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {columns.map((col) => (
                                <Text key={col.dataIndex} style={[styles.cell, { color: theme.colors.text }]}>
                                    {col.render ? col.render(row[col.dataIndex], row) : row[col.dataIndex]}
                                </Text>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* Pagination Controls */}
            <View style={styles.paginationContainer}>
                <Button
                    title="Previous"
                    onPress={onPreviousPage}
                    disabled={currentPage === 1}
                />
                <Text style={[styles.pageInfo, { color: theme.colors.text }]}>
                    Page {currentPage} of {totalPages}
                </Text>
                <Button
                    title="Next"
                    onPress={onNextPage}
                    disabled={currentPage === totalPages}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tableContainer: {
        flex: 1,
    },
    table: {
        width: '100%',
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    headerCell: {
        flex: 1,
        fontWeight: 'bold',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    cell: {
        flex: 1,
        padding: 10,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    pageInfo: {
        marginHorizontal: 20,
        fontSize: 16,
    },
});

export default Table;
