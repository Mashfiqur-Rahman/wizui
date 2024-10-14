import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

let DocumentPicker: { pick: (arg0: { type: any[]; }) => any; types: { allFiles: any; }; isCancel: (arg0: unknown) => any; };
if (Platform.OS !== 'web') {
    DocumentPicker = require('react-native-document-picker'); // Conditionally require for mobile platforms
}

interface FileUploadProps {
    label?: string;
    onFileSelect?: (file: any) => void;
    errorMessage?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, onFileSelect, errorMessage }) => {
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const theme = useTheme();

    const handleFileSelectMobile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setSelectedFile(res);
            if (onFileSelect) onFileSelect(res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('File selection was canceled');
            } else {
                console.error(err);
            }
        }
    };

    const handleFileSelectWeb = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setSelectedFile(file);
        if (onFileSelect && file) {
            onFileSelect(file);
        }
    };

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            {Platform.OS === 'web' ? (
                // Web-specific file input
                <input
                    type="file"
                    onChange={handleFileSelectWeb}
                    style={styles.webInput}
                />
            ) : (
                // Mobile-specific file picker (conditionally imported)
                <TouchableOpacity
                    style={[styles.inputContainer, { borderColor: errorMessage ? theme.colors.error : theme.colors.primary }]}
                    onPress={handleFileSelectMobile}
                >
                    <Text style={styles.inputText}>
                        {selectedFile ? selectedFile.name || selectedFile[0]?.name : 'Select a file'}
                    </Text>
                </TouchableOpacity>
            )}

            {errorMessage && <Text style={[styles.error, { color: theme.colors.error }]}>{errorMessage}</Text>}
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
        padding: 10,
    },
    inputText: {
        fontSize: 16,
        color: '#333',
    },
    webInput: {
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    error: {
        marginTop: 5,
        fontSize: 12,
    },
});

export default FileUpload;
