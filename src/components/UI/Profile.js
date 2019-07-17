import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Values from '../common/Values';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <View style={Values.styles.container}>
            <Text>
                Mi perfil
            </Text>
        </View> 
        );
    }
}
 
export default Profile;