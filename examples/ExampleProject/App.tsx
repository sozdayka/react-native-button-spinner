/**
 * Sample plugin for React Native App
 * https://www.npmjs.com/package/react-native-button-spinner
 * Author: Igor Rosliakov (sozdayka)
 * 
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ButtonSpinner from 'react-native-button-spinner';

import Icon from 'react-native-vector-icons/AntDesign';
import { resolvePlugin } from '@babel/core';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import * as IconFeather from 'react-native-vector-icons/Feather';
// import * as IconEvilIcons from 'react-native-vector-icons/EvilIcons';

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;


  const functinReturnString = () => {
    return 'kamikadze'
  }
  const functinReturnObject = () => {
    alert("::2")
    return { a: 'kamikadze' }
  }
  const functinReturnNumber = () => {
    alert("::3")
    return 12
  }
  const sendRequest = () => {
    return new Promise(() => { })
  }

  const awaitSendRequest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("api ok")
      }, 2500)
    })
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Example Customize</Text>
              <ButtonSpinner
                onPress={sendRequest}
              >
                <Icon name="qrcode" size={20} color="green" />
                <Text style={{ color: 'green' }}>Get QR code</Text>
              </ButtonSpinner>
              <ButtonSpinner
                onPress={sendRequest}
              >
                <Icon name="shoppingcart" size={20} color="#900" style={{ marginRight: 10 }} />
                <Text>Add to cart</Text>
              </ButtonSpinner>
              <ButtonSpinner
                positionSpinner={'centered-without-text'}
                onPress={sendRequest}
              >
                <Icon name="hearto" size={20} color="#900" />
              </ButtonSpinner>

            </View>


            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Position Spinner</Text>
              <ButtonSpinner
                onPress={sendRequest}
              >
                <Text>Position Left</Text>
              </ButtonSpinner>

              <ButtonSpinner
                positionSpinner={'right'}
                onPress={sendRequest}
              >
                <Text>Position right</Text>
              </ButtonSpinner>

              <ButtonSpinner
                positionSpinner={'centered-over-text'}
                onPress={sendRequest}
              >
                <Text>Position centered-over-text</Text>
              </ButtonSpinner>

              <ButtonSpinner
                positionSpinner={'centered-without-text'}
                onPress={sendRequest}
              >
                <Text>Position centered-without-text</Text>
              </ButtonSpinner>

              <ButtonSpinner
                positionSpinner={'left-without-text'}
                onPress={sendRequest}
              >
                <Text>Position left-without-text</Text>
              </ButtonSpinner>
              <ButtonSpinner
                positionSpinner={'right-without-text'}
                onPress={sendRequest}
              >
                <Text>Position right-without-text</Text>
              </ButtonSpinner>

              <ButtonSpinner
                positionSpinner={'above-text'}
                onPress={sendRequest}
              >
                <Text>Position above-text</Text>
              </ButtonSpinner>
              <ButtonSpinner
                positionSpinner={'below-text'}
                onPress={sendRequest}
              >
                <Text>Position below-text</Text>
              </ButtonSpinner>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Default button</Text>
              <ButtonSpinner />
              <ButtonSpinner textButton={'Text Button'}/>

              <ButtonSpinner>My Default Button</ButtonSpinner>
              <View style={styles.sectionDescription}>
                <Text>Disable button</Text>
                <ButtonSpinner
                  disabled={true}
                >Default Disable btn</ButtonSpinner>

                <ButtonSpinner
                  style={{ backgroundColor: 'blue' }}
                  styleText={{ color: 'red' }}
                  disabled={true}
                //opacityDisabled={0.1}
                >Customize Disable btn</ButtonSpinner>
              </View>
            </View>


            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Callback Value Function</Text>
              <ButtonSpinner
                onPress={functinReturnString}
              >
                My functin return string
              </ButtonSpinner>
              <ButtonSpinner
                onPress={functinReturnObject}
              >
                My functin return object
              </ButtonSpinner>
              <ButtonSpinner
                onPress={functinReturnNumber}
              >
                My functin return number
              </ButtonSpinner>
              {/* //sectionDescription */}

              <ButtonSpinner
                onPress={sendRequest}
              >
                My functin use Promise
              </ButtonSpinner>
              <ButtonSpinner
                onPress={awaitSendRequest}
              >
                Await Promise Resolve
              </ButtonSpinner>


              <ButtonSpinner
                onPress={awaitSendRequest}
              >
                <Text style={{ color: 'orange' }}>Await response</Text>
              </ButtonSpinner>
              <View style={styles.sectionDescription}>
                <Text>Custom spinner</Text>
                <ButtonSpinner
                  onPress={awaitSendRequest}
                  typeSpinner='custom'
                  customSpinnerComponent={<Text style={{ color: 'red' }}>Loading</Text>}
                >
                  <Text style={{ color: 'green' }}>Custom spinner</Text>
                </ButtonSpinner>
              </View>
              <View style={styles.sectionDescription}>
                <Text>Enable btn after 10s.</Text>
                <ButtonSpinner
                  disabled={true}
                  onPress={sendRequest}
                  pendingRequest={false}
                  automaticTimeEnable={10000}
                >
                  <Text>Disabled btn and enable</Text>
                </ButtonSpinner>
              </View>
              <View style={styles.sectionDescription}>
                <Text>NOT wait response and enable btn after 4s.</Text>
                <ButtonSpinner
                  onPress={sendRequest}
                  pendingRequest={false}
                  automaticTimeEnable={4000}
                  typeSpinner='custom'
                  customSpinnerComponent={<Text style={{ color: 'red' }}>Loading</Text>}
                >
                  <Text style={{ color: 'green' }}>Custom spinner</Text>
                </ButtonSpinner>
              </View>
            </View>





            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>More example</Text>

            </View>


            <View style={styles.sectionContainer}>






            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
