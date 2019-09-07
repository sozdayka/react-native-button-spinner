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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ButtonSpinner from 'react-native-button-spinner'

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;


  const test1 = () => {
    alert("::1")
    //return 'kamikadze'
  }
  const test2 = () => {
    alert("::2")
    return { a: 'kamikadze' }
  }
  const test3 = () => {
    alert("::3")
    return 12
  }
  const test4 = () => {
    return new Promise(() => { })
  }
  const test5 = () => {
    return setTimeout(() => {
      return new Promise(() => { })
    }
      , 1500)
  }
  const signin = () => {

  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {!usingHermes ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes 111</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <ButtonSpinner
                disabled={true}
                test={false}
              >My text1</ButtonSpinner>

              <ButtonSpinner>
                My text2
</ButtonSpinner>

              <ButtonSpinner
                style={{ backgroundColor: 'blue' }}
                styleText={{color: 'red'}}
                disabled={true}
                //opacityDisabled={0.1}
              >My text3</ButtonSpinner>

              <ButtonSpinner
                onPress={test1}
              >
                My text4-1
</ButtonSpinner>
              <ButtonSpinner
                onPress={test2}
              >
                My text4-2
</ButtonSpinner>
              <ButtonSpinner
                onPress={test3}
              >
                My text4-3
</ButtonSpinner>
              <ButtonSpinner
                onPress={test4}
              >
                My text4-4
</ButtonSpinner>
              <ButtonSpinner
                onPress={test5}
              >
                My text4-5
</ButtonSpinner>
              <ButtonSpinner
                onPress={signin}
              >
                My text4-6 login
</ButtonSpinner>


              <ButtonSpinner
                onPress={signin}
              >
                <Text style={{ color: 'orange' }}>My text4-7 login</Text>
              </ButtonSpinner>

              <ButtonSpinner
                // onPress={signin}
                typeSpinner='custom'
                customSpinnerComponent={<Text style={{ color: 'red' }}>Loading</Text>}
              >
                <Text style={{ color: 'green' }}>My text4-8 login</Text>
              </ButtonSpinner>
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
