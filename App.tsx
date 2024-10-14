import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Carousel from './src/components/DisplayComponents/Carousel/Carousel';
import Stepper from './src/components/FeedbackComponents/Stepper/Stepper';
import Tags from './src/components/DisplayComponents/Tags/Tags';
import Accordion from './src/components/DisplayComponents/Accordion/Accordion';
import Button from './src/components/FormComponents/Button/Button';

export default function App() {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [currentStep, setCurrentStep] = useState(0);

    const tags = ['React', 'JavaScript', 'Node.js', 'CSS'];
    const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    };

    const handlePreviousStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    return (
        <ScrollView style={styles.container}>
            {/* TextArea Example */}
            <Text style={styles.sectionHeader}>Text Area</Text>
            {/*<TextArea*/}
            {/*    value={textAreaValue}*/}
            {/*    onChange={setTextAreaValue}*/}
            {/*    placeholder="Enter multi-line text here"*/}
            {/*/>*/}
            <Text style={styles.textAreaValue}>Value: {textAreaValue}</Text>

            {/* Carousel Example */}
            <Text style={styles.sectionHeader}>Carousel</Text>
            <Carousel>
                <View style={styles.carouselItem}>
                    <Text>Item 1</Text>
                </View>
                <View style={styles.carouselItem}>
                    <Text>Item 2</Text>
                </View>
                <View style={styles.carouselItem}>
                    <Text>Item 3</Text>
                </View>
                <View style={styles.carouselItem}>
                    <Text>Item 4</Text>
                </View>
                <View style={styles.carouselItem}>
                    <Text>Item 5</Text>
                </View>
            </Carousel>

            {/* Stepper Example */}
            <Text style={styles.sectionHeader}>Stepper</Text>
            <Stepper steps={steps} currentStep={currentStep} />
            <View style={styles.stepperButtons}>
                <Button title="Previous" onPress={handlePreviousStep} disabled={currentStep === 0} />
                <Button title="Next" onPress={handleNextStep} disabled={currentStep === steps.length - 1} />
            </View>

            {/* Tags Example */}
            <Text style={styles.sectionHeader}>Tags</Text>
            <Tags tags={tags} />

            {/* Accordion Example */}
            <Text style={styles.sectionHeader}>Accordion</Text>
            <Accordion title="Click to Expand">
                <Text>This is the content inside the accordion.</Text>
            </Accordion>
            <Accordion title="Another Accordion">
                <Text>More expandable content here.</Text>
            </Accordion>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    textAreaValue: {
        marginTop: 10,
        color: '#333',
    },
    carouselItem: {
        width: 300,
        height: 200,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 5,
    },
    stepperButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
});