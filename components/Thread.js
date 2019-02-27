import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Thread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        }
        setInterval(()=>(this.setState(pre=>({isShow: !pre.isShow}))), 1000);
    }

    render() {
        if (!this.state.isShow) {
            return null;
        }
        return(
            <View>
                <Text>Manh qua la handsome</Text>
            </View>
        );
    }
}

export default Thread;