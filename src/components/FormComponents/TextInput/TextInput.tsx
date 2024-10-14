import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from "../../../theme/ThemeProvider";

interface TextInputProps extends RNTextInputProps {
    label?: string;
    errorMessage?: string;
    iconName?: keyof typeof FontAwesome.glyphMap;
}

const TextInput: React.FC<TextInputProps> = ({ label, errorMessage, iconName, style, ...props }) => {
    const theme = useTheme();
    const [inputValue, setInputValue] = useState(props.value);

    const handleClear = () => {
        setInputValue('');
        if (props.onChangeText) {
            props.onChangeText('');
        }
    };

    const color = errorMessage ? theme.colors.error : theme.colors.borderColor;

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={[styles.inputContainer, style]}>
                {iconName && (
                    <FontAwesome
                        name={iconName}
                        size={20}
                        color={theme.colors.icon}
                        style={styles.icon}
                    />
                )}
                <RNTextInput
                    style={[styles.input, { borderColor:  color}]}
                    placeholderTextColor={theme.colors.textSecondary}
                    value={inputValue}
                    onChangeText={(text) => {
                        setInputValue(text);
                        if (props.onChangeText) {
                            props.onChangeText(text);
                        }
                    }}
                    {...props}
                />
                {props.value ? (
                    <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                        <FontAwesome name="times-circle" size={20} color={color} />
                    </TouchableOpacity>
                ) : null}
            </View>
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            <Text>{inputValue}</Text>
            <Text>{props.value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        marginBottom: 5,
        color: '#333',
        fontSize: 14,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
    },
    icon: {
        marginRight: 10
    },
    clearButton: {
        marginLeft: 10,
    },
    error: {
        marginTop: 5,
        color: '#ff4d4f',
        fontSize: 12,
    },
    clearInput : {
        color: '#ff4d4f',
    }
});

export default TextInput;