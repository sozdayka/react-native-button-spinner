# react-native-button-spinner [![npm version](https://badge.fury.io/js/react-native-button-spinner.svg)](https://badge.fury.io/js/react-native-button-spinner)
[![npm](https://img.shields.io/npm/dw/react-native-button-spinner.svg)](https://www.npmjs.com/package/react-native-button-spinner)
[![npm](https://img.shields.io/npm/dt/react-native-button-spinner.svg)](https://www.npmjs.com/package/react-native-button-spinner)
[![Package Quality](http://npm.packagequality.com/shield/react-native-button-spinner.svg)](http://packagequality.com/#?package=react-native-button-spinner)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/sozdayka/react-native-button-spinner/master/LICENSE)

This is a Javascript button indicator (spinner) plugin for react-native. Which will allow you to customize and disable the button. So the plug-in stops the indicator after completing the function or interrupting it after a certain time.

## Getting Started

```bash
npm i react-native-button-spinner --save
```

## Usage
1) Import plugin
```javascript
import ButtonSpinner from 'react-native-button-spinner';
```
2) Add button component
```javascript
<ButtonSpinner>
    My text button 1
</ButtonSpinner>
```

```javascript
<ButtonSpinner
    disabled={true}
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
    onPress={this.myFunction}
>
    My text button 4
</ButtonSpinner>
```
## Demo & Example

See the full source demo code in [example project](https://github.com/sozdayka/react-native-button-spinner/tree/master/examples/ExampleProject "example project")


![](https://i.ibb.co/wQ9fv23/ezgif-2-10b5703bd232.gif)

<details>
  <summary>Default button</summary>

![](https://i.ibb.co/kSDw6Hn/2019-09-23-23-04-18.png)

```javascript
<ButtonSpinner />
```

```javascript
<ButtonSpinner textButton={'Text Button'}/>
```

```javascript
<ButtonSpinner>My Default Button</ButtonSpinner>
```
</details>
<details>
  <summary>Disable button</summary>

![](https://i.ibb.co/FJxkmkG/2019-09-23-23-04-28.png)

```javascript
<ButtonSpinner disabled={true}>Default Disable btn</ButtonSpinner>
```

```javascript
 <ButtonSpinner
		style={{ backgroundColor: 'blue' }}
		styleText={{ color: 'red' }}
		disabled={true}>Customize Disable btn</ButtonSpinner>
```

</details>
<details>
  <summary>Callback Value Function</summary>

![](https://i.ibb.co/rbH3PcW/2019-09-23-22-35-04-04.gif)

```javascript
<ButtonSpinner
	onPress={sendRequest}
>
	My functin use Promise
</ButtonSpinner>
```

![](https://i.ibb.co/FYfmVBG/2019-09-23-22-35-18-18.gif)

```javascript
<ButtonSpinner
	onPress={awaitSendRequest}
>
	Await Promise Resolve
</ButtonSpinner>
```

![](https://i.ibb.co/kmx891g/2019-09-23-22-35-30-30.gif)

```javascript
<ButtonSpinner
	onPress={awaitSendRequest}
>
	<Text style={{ color: 'orange' }}>Await response</Text>
</ButtonSpinner>
```

![](https://i.ibb.co/P60SQD3/2019-09-23-22-35-42-42.gif)

```javascript
<ButtonSpinner
	onPress={awaitSendRequest}
	typeSpinner='custom'
	customSpinnerComponent={<Text style={{ color: 'red' }}>Loading</Text>}
>
	<Text style={{ color: 'green' }}>Custom spinner</Text>
</ButtonSpinner>
```

![](https://i.ibb.co/26wtQcY/2019-09-23-22-35-58-58.gif)

```javascript
<ButtonSpinner
	disabled={true}
	onPress={sendRequest}
	pendingRequest={false}
	automaticTimeEnable={10000}
 >
 	<Text>Disabled btn and enable</Text>
 </ButtonSpinner>
```

```javascript
<ButtonSpinner
 	onPress={sendRequest}
 	pendingRequest={false}
 	automaticTimeEnable={4000}
 	typeSpinner='custom'
 	customSpinnerComponent={<Text style={{ color: 'red' }}>Loading</Text>}
 >
 	<Text style={{ color: 'green' }}>Custom spinner</Text>
 </ButtonSpinner>
``` 

</details>
<details>
  <summary>Position right-without-text</summary>

![](https://i.ibb.co/SKth0j7/2019-09-23-22-32-13-13.gif)

```javascript
<ButtonSpinner
	onPress={sendRequest}
>
	<Text>Position Left</Text>
</ButtonSpinner>
```

![](https://i.ibb.co/CnrwmMk/2019-09-23-22-32-26-26.gif)

```javascript
<ButtonSpinner
	positionSpinner={'right'}
	onPress={sendRequest}
>
	<Text>Position right</Text>
</ButtonSpinner>
```

![](https://i.ibb.co/VLSkSkk/2019-09-23-22-33-15-15.gif)

```javascript
<ButtonSpinner
	positionSpinner={'centered-over-text'}
	onPress={sendRequest}
>
	<Text>Position centered-over-text</Text>
</ButtonSpinner>
```

![](https://i.ibb.co/rbrVfpq/2019-09-23-22-33-25-25.gif)

```javascript
<ButtonSpinner
	positionSpinner={'centered-without-text'}
	onPress={sendRequest}
>
	<Text>Position centered-without-text</Text>
</ButtonSpinner>
```

![](https://i.ibb.co/w6jKsJv/2019-09-23-22-33-35-35.gif)

```javascript
<ButtonSpinner
	positionSpinner={'left-without-text'}
	onPress={sendRequest}
>
	<Text>Position left-without-text</Text>
</ButtonSpinner>
```

![](https://i.ibb.co/NYPVt0x/2019-09-23-22-33-44-44.gif)

```javascript
<ButtonSpinner
	positionSpinner={'right-without-text'}
	onPress={sendRequest}
>
	<Text>Position right-without-text</Text>
</ButtonSpinner>
```

![](https://i.ibb.co/Q70vjwV/2019-09-23-22-34-07-07.gif)

```javascript
<ButtonSpinner
	positionSpinner={'above-text'}
	onPress={sendRequest}
>
	<Text>Position above-text</Text>
</ButtonSpinner>
```

![](https://i.ibb.co/S5qN5Y2/2019-09-23-22-34-37-37.gif)

```javascript
<ButtonSpinner
	positionSpinner={'below-text'}
	onPress={sendRequest}
>
	<Text>Position below-text</Text>
</ButtonSpinner>
```

</details>
<details>
  <summary>Example Customize</summary>

![](https://i.ibb.co/f81jyGB/2019-09-23-22-31-38-38.gif)

```javascript
<ButtonSpinner
	onPress={sendRequest}
>
	<Icon name="qrcode" size={20} color="green" />
	<Text style={{ color: 'green' }}>Get QR code</Text>
</ButtonSpinner>
```


![](https://i.ibb.co/XScc18f/2019-09-23-22-31-46-46.gif)

```javascript
<ButtonSpinner
	onPress={sendRequest}
>
	<Icon name="shoppingcart" size={20} color="#900" style={{ marginRight: 10 }} />
	<Text>Add to cart</Text>
</ButtonSpinner>
```


![](https://i.ibb.co/Fq3CG07/2019-09-23-22-31-58-58.gif)

```javascript
<ButtonSpinner
	positionSpinner={'centered-without-text'}
	onPress={sendRequest}
>
	<Icon name="hearto" size={20} color="#900" />
</ButtonSpinner>
```

</details>
<details>
  <summary>All the examples of functions from the demo</summary>

```javascript
  const functinReturnString = () => {
    return 'kamikadze'
  }
```

```javascript
  const functinReturnObject = () => {
    return { a: 'kamikadze' }
  }
```

```javascript
  const functinReturnNumber = () => {
    return 12
  }
```

```javascript
  const sendRequest = () => {
    return new Promise(() => { })
  }
```

```javascript
  const awaitSendRequest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("api ok")
      }, 2500)
    })
  }
```
</details>

[![](https://lh3.googleusercontent.com/7l-bQADRV4PzxAz_9GH2aozV3jkHqdlUJbOsIf4Eu_bazCi6UH_UyiAeKer2-s9GafI)](https://snack.expo.io/@sozdayka/react-native-button-spinner)

[![](https://i.ibb.co/x2y22pR/download.png)](https://snack.expo.io/@sozdayka/react-native-button-spinner)

## Props

- [`children`](#children)
- [`textButton`](#textbutton)
- [`disabled`](#disabled)
- [`opacity`](#opacity)
- [`opacityDisabled`](#opacitydisabled)
- [`pendingRequest`](#pendingrequest)
- [`automaticTimeEnable`](#automatictimeenable)
- [`style`](#style)
- [`styleText`](#styletext)
- [`styleSpinner`](#stylespinner)
- [`typeSpinner`](#typespinner)
- [`positionSpinner`](#positionspinner)
- [`customSpinnerComponent`](#customcpinnercomponent)
- [`onPress`](#onpress)


## Reference

### `children`

Text Button (use textButton or children)

|        Type         | Default |
| :-----------------: | :-----: |
| React Native Component (`React.ReactElement`) |  none   |


How to use props children:
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


How to use props children:
```javascript
 <ButtonSpinner textButton={'Text Button'}/>
```

---
### `disabled`

Disabled button

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

Default opacity button when the state is disabled

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

Style for button spinner  if the customSpinnerComponent is not used

the sizes have the following options:

- `small`

- `large`

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) | `{ style: { marginRight: 15, }, color: '#a6a6a6', size: 'small' }` |

---
### `typeSpinner`

The types of the spinner (optional):
- `defaut`
- `custom`

|        Type         | Default |
| :-----------------: | :-----: |
| `defaut`, `custom` |  defaut   |

---
### `positionSpinner`

The positions of the button spinner (optional):
- `left`
- `right`
- `centered-over-text`
- `centered-without-text`
- `left-without-text`
- `right-without-text`
- `above-text`
- `below-text`

The positions of the button spinner  if the customSpinnerComponent is not used.


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



