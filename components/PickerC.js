import React, {Component} from 'react';
import {Picker, Text} from 'react-native';

export default class PickerC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
    }

    render() {
        return(
            <Picker
                selectedValue={this.state.item}
                style={{width: 100, height: 50}}
                onValueChange={(itemValue, itemIndex) => this.setState({item: itemValue})}
            >
                <Picker.Item label="Heelu" value="yeah" />
                <Picker.Item label="Hi" value="ji" />
                <Picker.Item label="Set" value="ds" />
            </Picker>
        );
    }
}