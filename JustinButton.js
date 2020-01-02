import React from 'react';
import { Content, Button} from 'native-base';
import { StyleSheet, Text, View} from 'react-native';

export default class JustinButton extends React.Component{
    render(){
        return(
            <View>
                <Button >
                    <Text>{this.props.buttonText} Hello/Text>
                </Button>
            </View>
        )
    }
}