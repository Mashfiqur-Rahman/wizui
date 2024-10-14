import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import TextInput from './src/components/FormComponents/TextInput/TextInput';
import Button from "./src/components/FormComponents/Button/Button";
import Select from "./src/components/FormComponents/Select/Select";
import Checkbox from "./src/components/FormComponents/Checkbox/Checkbox";
import CheckboxList from "./src/components/FormComponents/Checkbox/CheckboxList";
import RadioGroup from "./src/components/FormComponents/RadioGroup/RadioGroup";
import Switch from "./src/components/FormComponents/Switch/Switch";
import CustomDatePicker from './src/components/FormComponents/DatePicker/DatePicker';
import CustomTimePicker from "./src/components/FormComponents/TimePicker/TimePicker";
import FileUpload from "./src/components/FormComponents/FileUpload/FileUpload";

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
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
    };
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    const handleTimeChange = (date: Date) => {
        setSelectedTime(date);
    };
    const [selectedFile, setSelectedFile] = useState<any>(null);

    const handleFileSelect = (file: any) => {
        setSelectedFile(file);
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
                <CustomDatePicker
                    label="Select Date"
                    selectedDate={selectedDate || undefined}
                    onDateChange={handleDateChange}
                    minimumDate={new Date(2020, 0, 1)}
                    maximumDate={new Date(2025, 11, 31)}
                    errorMessage={!selectedDate ? 'Please select a date' : ''}
                />
                {selectedDate && <Text>Selected Date: {selectedDate.toDateString()}</Text>}
                <CustomTimePicker
                    label="Select Time"
                    selectedTime={selectedTime || undefined}
                    onTimeChange={handleTimeChange}
                    errorMessage={!selectedTime ? 'Please select a time' : ''}
                />
                {selectedTime && <Text>Selected Time: {selectedTime.getHours()}:{selectedTime.getMinutes().toString().padStart(2, '0')}</Text>}
                <FileUpload
                    label="Upload File"
                    onFileSelect={handleFileSelect}
                    errorMessage={!selectedFile ? 'Please select a file' : ''}
                />
                {selectedFile && <Text>Selected File: {selectedFile.name || selectedFile.name}</Text>}
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