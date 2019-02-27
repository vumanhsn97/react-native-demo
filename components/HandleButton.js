import React, {Component} from 'react';
import {View, Alert, Button, StyleSheet, TouchableHighlight, Text} from 'react-native';

export default class HandleButton extends Component {
    constructor(props) {
        super(props);

    }

    onClick = () => {
        Alert.alert("You clicked!");
    }

    render() {
        return(
            <View>
                <Button
                    onPress={this.onClick}
                    title="Click me"
                    color="red" />
                <TouchableHighlight
                    onPress={this.onClick}
                >
                    <View style={{ color: 'black', borderRadius: 15}}>
                        <Text>
                            Helu d
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}