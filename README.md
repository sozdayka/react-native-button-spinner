# react-native-button-spinner [![npm version](https://badge.fury.io/js/react-native-button-spinner.svg)](https://badge.fury.io/js/react-native-button-spinner)

Buttons spinners plugin for react-native

## Getting Started

```bash
npm i react-native-button-spinner --save
```

## Usage
```javascript
import ButtonSpinner from 'react-native-button-spinner';
...
// Your button

<SozdaykaDemo>
    My text button 1
</SozdaykaDemo>
```

```javascript
<SozdaykaDemo
    disabled={true}
    test={false}
>
    My text button 2
</SozdaykaDemo>
```

```javascript
<SozdaykaDemo
    style={{ backgroundColor: 'blue' }}
    disabled={true}
    opacityDisabled={0.1}
>
    My text button 3
</SozdaykaDemo>
```

```javascript
<SozdaykaDemo
    onPress={this.test1}
>
    My text button 4
</SozdaykaDemo>
```


## License
This project is licensed under the MIT License - see the LICENSE file for details

Copyright (c) 2019 Igor Rosliakov