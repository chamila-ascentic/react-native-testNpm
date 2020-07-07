import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class BolderTextComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View>
            <Text>{this.props.title}</Text>
        </View>
        );
    }
}
