import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';

export default class ListV extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        return(
            <FlatList 
                data={[
                    {key: 1, value: 'manh'},
                    {key: 3, value: 'tuong'},
                    {key: 2, value: 'toan'},
                    {key: 4, value: 'minh'}
                ]}

                renderItem={({item}) => <Text>{item.value}</Text>} />
        );
    }

}