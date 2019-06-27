
import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { Font } from 'expo';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/UI/Login';
import Router from './Router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'segoeuil': require('./assets/fonts/segoeuil.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  buttonClicked() {
    alert("Has comenzado a programar para la mejor fábrica de software del mundo");
  }
  render() {
    if (this.state.fontLoaded)
      return (
        <Router />
      );

    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
      </View>
    )

  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

