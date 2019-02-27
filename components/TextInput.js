import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

export default class InputText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            in: "",
        }
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <TextInput placeholder="Send me request" onChangeText={(text)=>this.setState({in: text})} />
                <Text>{this.state.in.split(' ').map((word)=>word + '🍕')}</Text>
            </View>
        );
    }
}