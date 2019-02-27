import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

export default class ScrollV extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: 'https://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheRightFoodToFeedYourFish-Herbivores-20160818?$AR0201$' }} />
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: 'https://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheRightFoodToFeedYourFish-Herbivores-20160818?$AR0201$' }} />
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{ uri: 'https://s7d2.scene7.com/is/image/PetSmart/AR1501_TOPIC_IMAGE-TheRightFoodToFeedYourFish-Herbivores-20160818?$AR0201$' }} />
                </View>
            </ScrollView>
        );
    }
}