import React from 'react';
import {TouchableOpacity, Text } from 'react-native';

const MyButton = props => (
    <TouchableOpacity onPress={props.onPress} style ={props.style}>
        <Text style = {props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
);

export default MyButton;