import React, { Component } from 'react';
import { View } from 'react-native';
import Home from "./Home";
import Profile from './Profile';
import { createDrawerNavigator,createAppContainer } from 'react-navigation';
import Values from '../common/Values';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: Home,
    },
    Perfil: {
      screen: Profile,
    },
  });
  
const MyDrawer = createAppContainer(MyDrawerNavigator);
class DrawerHome extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null//navigation.getParam('otherParam', 'Home')
        }

    };
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          <View style={Values.styles.container}>
            <MyDrawer/>
          </View>
            
         );
    }
}
 
export default DrawerHome;