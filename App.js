/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Thread from './components/Thread.js';
import Flex from './components/Flex.js';
import TextInput from './components/TextInput';
import HandleButton from './components/HandleButton';
import ScrollV from './components/ScrollV';
import ListV from './components/ListV';
import PickerC from './components/PickerC';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <PickerC />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
