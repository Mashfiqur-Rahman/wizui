import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import TextInput from './src/components/FormComponents/TextInput/TextInput';
import Button from "./src/components/FormComponents/Button/Button";
import Select from "./src/components/FormComponents/Select/Select";
import Checkbox from "./src/components/FormComponents/Checkbox/Checkbox";
import CheckboxList from "./src/components/FormComponents/Checkbox/CheckboxList";
import RadioGroup from "./src/components/FormComponents/RadioGroup/RadioGroup";
import Switch from "./src/components/FormComponents/Switch/Switch";

export default function App() {
    const [text, setText] = useState('');
    const [error, setError] = useState('');

    const handleChangeText = (value: string) => {
        setText(value);
        setError(value.length < 3 ? 'Input must be at least 3 characters long' : '');
    };
    const [selected, setSelected] = useState('');

    const handleValueChange = (value: string) => {
        setSelected(value);
    };
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
    };
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleSelectionChange = (values: string[]) => {
        setSelectedValues(values);
    };
    const [selectedValue, setSelectedValue] = useState('');

    const handleRGValueChange = (value: string) => {
        setSelectedValue(value);
    };
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const handleSwitchValueChange = (value: boolean) => {
        setIsSwitchOn(value);
    };
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <TextInput
                    label="Username"
                    iconName={'user'}
                    placeholder="Enter your username"
                    value={text}
                    onChangeText={handleChangeText}
                    errorMessage={error}
                />
                <Text>TextInput value: {text}</Text>
                <Button title="Submit" onPress={() => console.log('Submit')} iconName={'user'} />
                <Select
                    label="Select an Option"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                    ]}
                    placeholder="Pick one"
                    selectedValue={selected}
                    onValueChange={handleValueChange}
                    leftIconName="list-alt"  // Left icon
                    errorMessage={selected == '' || selected ? '' : 'This field is required'}
                />
                <Text>Select Value: {selected}</Text>
                <Checkbox
                    label="Accept Terms and Conditions"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    errorMessage={!isChecked ? 'You must accept the terms' : ''}
                />
                <Text>Checkbox Value: {isChecked ? 'Checked' : 'Unchecked'}</Text>
                <CheckboxList
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                        { label: 'Option 4', value: '4' },
                    ]}
                    minSelected={1}
                    maxSelected={3}
                    onSelectionChange={handleSelectionChange}
                />
                <Text>Selected: {selectedValues.join(', ')}</Text>
                <RadioGroup
                    label="Select an Option"
                    options={[
                        { label: 'Option 1', value: '1' },
                        { label: 'Option 2', value: '2' },
                        { label: 'Option 3', value: '3' },
                    ]}
                    selectedValue={selectedValue}
                    onValueChange={handleRGValueChange}
                />
                <Text>Selected Value: {selectedValue}</Text>
                <Switch
                    label="Enable Notifications"
                    value={isSwitchOn}
                    onValueChange={handleSwitchValueChange}
                />
                <Text>{isSwitchOn ? 'Switch is ON' : 'Switch is OFF'}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});