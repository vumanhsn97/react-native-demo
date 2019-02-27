import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { black } from 'ansi-colors';

export default class Flex extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'black'}}></View>
                <View style={{ height: 50, backgroundColor: 'blue'}}></View>
                <View style={{height: 100, backgroundColor: 'red'}}></View>
            </View>
        );
    }
}