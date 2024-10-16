
# WizUI

**WizUI** is a customizable React Native UI component library designed to be used in various mobile applications. It provides essential UI components, allowing developers to quickly build React Native apps with pre-built, customizable UI elements.

## Features
- A collection of commonly used UI components.
- Fully customizable components for different themes and styles.
- Simple, intuitive API for easy integration into any React Native project.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Available Components](#available-components)
- [Customizing Theme](#customizing-theme)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install **WizUI**, you can use npm or yarn:

```bash
npm install @mashfiqur.rahman/wizui
# or
yarn add @mashfiqur.rahman/wizui
```

## Usage

Here is an example of how to use the **Button** and **TextInput** components from **WizUI**:

```javascript
import React, { useState } from 'react';
import { Button, TextInput } from '@mashfiqur.rahman/wizui';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={inputValue}
        onChange={setInputValue}
        placeholder="Enter text here"
      />
      <Button
        label="Submit"
        onPress={() => alert(`Submitted: ${inputValue}`)}
      />
    </View>
  );
};

export default App;
```

## Available Components

**WizUI** provides a comprehensive set of form, layout, display, and feedback components. Here's a list of the available components:

### Form Components
- `Button`: A customizable button component.
- `TextInput`: A single-line or multi-line text input field.
- `Checkbox`: A standard checkbox component.
- `RadioGroup`: A group of radio buttons.
- `Select`: A dropdown select component.
- `Switch`: A toggle switch component.

### Layout Components
- `Grid`: A flexible grid layout system.
- `Row` and `Column`: Grid layout helpers.
- `Card`: A configurable card component with header and footer.
  
### Display Components
- `Tooltip`: A customizable tooltip component.
- `Modal`: A modal dialog for presenting content.
- `Carousel`: A horizontal, swipeable carousel.
- `Tags`: Tag items for displaying labels or categories.
- `Avatar`: A circular or square avatar component.
  
### Feedback Components
- `Toast`: Displays temporary messages.
- `Alert`: An alert box for important messages.
- `ProgressBar`: A customizable progress indicator.
- `Stepper`: A step progress indicator.
- `Notification`: A notification component to display messages.
  
### Navigation Components
- `Tabs`: A tab navigation component.
- `Breadcrumb`: Breadcrumb navigation.

## Customizing Theme

You can customize the default theme of **WizUI** by providing your own colors, fonts, and other design properties. 

Example:

```javascript
import { ThemeProvider } from 'wizui/theme/ThemeProvider';

const customTheme = {
  colors: {
    primary: '#6200ee',
    background: '#f6f6f6',
    text: '#000000',
    error: '#B00020',
  },
};

const App = () => (
  <ThemeProvider theme={customTheme}>
    {/* Your app components here */}
  </ThemeProvider>
);
```

## Contributing

We welcome contributions! To contribute to **WizUI**, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes.
4. Submit a pull request with a detailed explanation of your changes.

### Development

To develop the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Mashfiqur-Rahman/wizui.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the project locally for development:

   ```bash
   npm start
   ```

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.
