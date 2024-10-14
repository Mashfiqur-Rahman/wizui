import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface StepperProps {
    steps: string[];  // List of steps
    currentStep: number;  // Index of the current step (0-based)
    style?: ViewStyle;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, style }) => {
    return (
        <View style={[styles.stepperContainer, style]}>
            {steps.map((step, index) => (
                <View key={index} style={styles.stepContainer}>
                    <View style={[styles.circle, currentStep >= index ? styles.activeCircle : styles.inactiveCircle]}>
                        <Text style={styles.stepNumber}>{index + 1}</Text>
                    </View>
                    {index < steps.length - 1 && <View style={styles.line} />}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    stepperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    activeCircle: {
        backgroundColor: '#4caf50',
    },
    inactiveCircle: {
        backgroundColor: '#e0e0e0',
    },
    stepNumber: {
        color: '#fff',
        fontWeight: 'bold',
    },
    line: {
        width: 40,
        height: 2,
        backgroundColor: '#e0e0e0',
    },
});

export default Stepper;
