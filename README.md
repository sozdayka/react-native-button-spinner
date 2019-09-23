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

## Props

- [`children`](#children)
- [`textButton`](#textButton)
- [`disabled`](#disabled)
- [`opacity`](#opacity)
- [`opacityDisabled`](#opacityDisabled)
- [`pendingRequest`](#pendingRequest)
- [`automaticTimeEnable`](#automaticTimeEnable)
- [`style`](#style)
- [`styleText`](#styleText)
- [`styleSpinner`](#styleSpinner)
- [`typeSpinner`](#typeSpinner)
- [`positionSpinner`](#positionSpinner)
- [`customSpinnerComponent`](#customSpinnerComponent)
- [`onPress`](#onPress)


## Reference

### `children`

Text Button (use textButton or children)

|        Type         | Default |
| :-----------------: | :-----: |
| React Native Component (`React.ReactElement`) |  none   |


Example use children:
```javascript
	<ButtonSpinner>My Default Button</ButtonSpinner>
```
OR
```javascript
	<ButtonSpinner>
		<Text>My Text</Text>
	</ButtonSpinner>
```

---
### `textButton`

Text Button (use children or textButton)

|        Type         | Default |
| :-----------------: | :-----: |
| string |  My Button text   |


Example use children:
```javascript
 <ButtonSpinner textButton={'Text Button'}/>
```

---
### `disabled`

Disable state button click

|        Type         | Default |
| :-----------------: | :-----: |
| boolean |  false   |

---
### `opacity`

Default opacity button

|        Type         | Default |
| :-----------------: | :-----: |
| number |  1   |

---
### `opacityDisabled`

Default opacity button when disabled state

|        Type         | Default |
| :-----------------: | :-----: |
| number |  0.35   |

---
### `pendingRequest`

Waiting for function to complete

|        Type         | Default |
| :-----------------: | :-----: |
| boolean |  true   |

---
### `automaticTimeEnable`

Time after which the button becomes active without waiting for the function to complete after `number` second(s).

Example set 2s. `automaticTimeEnable={2000}`

|        Type         | Default |
| :-----------------: | :-----: |
| number |  0   |

---
### `style`

add additional styling for button component (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) | see code below |

```javascript
{
        alignItems: 'center',
        backgroundColor: 'f5f5f5',
        color: '#dddddd',
        paddingVertical: 10,
        paddingHorizontal: 25,
        margin: 10,
        borderColor: '#c2c2c2',
        borderRadius: 5,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
```

---
### `styleText`

add additional styling for button text (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  `{ color: '#000000' }`   |

---
### `styleSpinner`

Style for button spinner  if not use customSpinnerComponent

size has option:

- `small`

- `large`

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) | `{ style: { marginRight: 15, }, color: '#a6a6a6', size: 'small' }` |

---
### `typeSpinner`

Type button spinner loader (optional):
- `defaut`
- `custom`

|        Type         | Default |
| :-----------------: | :-----: |
| `defaut`, `custom` |  defaut   |

---
### `positionSpinner`

Position button spinner (optional):
- `left`
- `right`
- `centered-over-text`
- `centered-without-text`
- `left-without-text`
- `right-without-text`
- `above-text`
- `below-text`

Position button spinner  if not use customSpinnerComponent.


|        Type         | Default |
| :-----------------: | :-----: |
| `left`, `right`, `centered-over-text`, `centered-without-text`, `left-without-text`, `right-without-text`, `above-text`, `below-text` |  left   |

---
### `customSpinnerComponent`

Custom button spinner component

|        Type         | Default |
| :-----------------: | :-----: |
| React Native Component (`React.ReactElement`) |  none   |

---
### `onPress`

Your function for click

|        Type         | Default |
| :-----------------: | :-----: |
| function |  `() => {}`   |

---


## License
This project is licensed under the MIT License - see the LICENSE file for details

Copyright (c) 2019 Igor Rosliakov
