import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Table from './src/components/DataDisplayComponents/Table/Table';

export default function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 2;  // Define how many rows to show per page

    const data = [
        { key: 1, name: 'John', age: 28, profession: 'Engineer' },
        { key: 2, name: 'Jane', age: 32, profession: 'Doctor' },
        { key: 3, name: 'Sam', age: 24, profession: 'Teacher' },
        { key: 4, name: 'Anna', age: 22, profession: 'Designer' },
    ];

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const paginatedData = data.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const columns = [
        { title: 'Name', dataIndex: 'name' },
        { title: 'Age', dataIndex: 'age' },
        { title: 'Profession', dataIndex: 'profession', render: (value) => <Text style={{ fontWeight: 'bold' }}>{value}</Text> },
    ];

    return (
        <View style={styles.container}>
            <Table
                columns={columns}
                data={paginatedData}
                currentPage={currentPage}
                totalPages={totalPages}
                onNextPage={handleNextPage}
                onPreviousPage={handlePreviousPage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
});
