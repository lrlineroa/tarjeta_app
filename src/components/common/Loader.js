import React, { Component } from 'react';
import { View,ActivityIndicator,Text } from 'react-native';
import Values from './Values';
class Loader extends Component {
    state = {  }
    render() { 
        return ( <View style={[Values.styles.container,Values.styles.centered]}>
            <ActivityIndicator size='large'/>
            <Text style={Values.styles.appText}>
                {this.props.message}
            </Text>
        </View> );
    }
}
 
export default Loader;