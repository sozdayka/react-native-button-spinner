# react-native-button-spinner [![npm version](https://badge.fury.io/js/react-native-button-spinner.svg)](https://badge.fury.io/js/react-native-button-spinner)
[![npm](https://img.shields.io/npm/dt/react-native-button-spinner.svg)](https://www.npmjs.com/package/react-native-button-spinner)
[![Package Quality](http://npm.packagequality.com/shield/react-native-button-spinner.svg)](http://packagequality.com/#?package=react-native-button-spinner)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

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

<ButtonSpinner>
    My text button 1
</ButtonSpinner>
```

```javascript
<ButtonSpinner
    disabled={true}
    test={false}
>
    My text button 2
</ButtonSpinner>
```

```javascript
<ButtonSpinner
    style={{ backgroundColor: 'blue' }}
    disabled={true}
    opacityDisabled={0.1}
>
    My text button 3
</ButtonSpinner>
```

```javascript
<ButtonSpinner
    onPress={this.test1}
>
    My text button 4
</ButtonSpinner>
```





### Props

| Parameter              | Type                                                                                   | Required | description                                                                                                                                                                                                                          | default                                                   |
| :--------------------- | :------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| textButton              | string                                                                                  | no      | Text Button (use textButton or children)                                                                                                                                                                                                                        |  `'Button Text'`                                                         |

| children              | string                                                                                  | no      | Text Button  (use textButton or children)                                                                                                                                                                                                                       |  `''`                                                         |
| disabled        | boolean                                                                                | no       | Disable button click                                                                                                                                                                                                                   | `false`            
| opacity        | number                                                                                | no       | Default opacity button                                                                                                                                                                                                                    | `1`    
| opacityDisabled        | number                                                                                | no       | Default opacity button when button disable                                                                                                                                                                                                                    | `0.35`    
| pendingRequest        | boolean                                                                                | no       | Wait for function to complete                                                                                                                                                                                                                    | `true`      
| automaticTimeEnable        | number                                                                                | no       | Time after which the button becomes active without waiting for the function to complete                                                                                                                                                                                                                    | `0`    
| styleButton        | object  `{someKey: someValue}`                                                                              | no       | Style for button                                                                                                                                                                                                                    | `{ alignItems: 'center', backgroundColor: 'f5f5f5', color: '#dddddd', paddingVertical: 10, paddingHorizontal: 25, margin: 10, borderColor: '#c2c2c2', borderRadius: 5, borderWidth: 1, flex: 1,      flexDirection: 'row', justifyContent: 'center',}`    
| styleText        | object  `{someKey: someValue}`                                                                              | no       | Style for button text if you not use custom component in button tag                                                                                                                                                                                                                    | `{ color: '#000000'}`
| styleSpinner        | object  `{ style: { {someKey: someValue} }, color: string, size: string }`                                                                              | no       | Style for button spinner  if not use customSpinnerComponent                                                                                                                                                                                                                      | `{ style: { marginRight: 15 }, color: '#a6a6a6', size: 'small', // 'small' or 'large' }` | typeSpinner        | string  `defaut | custom`                                                                              | no       | Type button spinner loader. Size has this option: `'small'` or `'large'`                                                                                                                                                                                                                  | `defaut`
| positionSpinner        | string                                                                        | no       | Position button spinner  if not use customSpinnerComponent. Position has this option: `'left'` `'right'` `'centered-over-text'` `'centered-without-text'` `'left-without-text'` `'right-without-text'` `'above-text'` `'below-text`'                                                                                                                                                                                                                  | `left`
| customSpinnerComponent        |   `React.ReactElement<any>`                                                                              | no       | Custom button spinner component                                                                                                                                                                                                               | `''`
| onPress               | function<br><br>`() => any`                                                           | no       | Your function for click   | `() => {}`    



## License
This project is licensed under the MIT License - see the LICENSE file for details

Copyright (c) 2019 Igor Rosliakov
