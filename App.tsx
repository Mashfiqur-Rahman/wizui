import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Grid from './src/components/LayoutComponents/Grid/Grid';
import Row from './src/components/LayoutComponents/Grid/Row';
import Column from './src/components/LayoutComponents/Grid/Column';

export default function App() {
    return (
        <View style={styles.container}>
            <Grid>
                <Row>
                    <Column size={1}>
                        <Text style={styles.box}>Column 1</Text>
                    </Column>
                    <Column size={1}>
                        <Text style={styles.box}>Column 2</Text>
                    </Column>
                    <Column size={1}>
                        <Text style={styles.box}>Column 3</Text>
                    </Column>
                </Row>

                <Row>
                    <Column size={2}>
                        <Text style={styles.box}>Column 1 (2x size)</Text>
                    </Column>
                    <Column size={1}>
                        <Text style={styles.box}>Column 2</Text>
                    </Column>
                </Row>
            </Grid>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    box: {
        backgroundColor: '#6200ee',
        color: '#fff',
        padding: 16,
        textAlign: 'center',
    },
});
