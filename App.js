
import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {Font} from 'expo';

import Router from './Router';
require('./src/globals')
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
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
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

