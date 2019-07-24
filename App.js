import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text, TouchableOpacity, Linking } from 'react-native';
import { Font } from 'expo';
import Router from './Router';
import appConstants from './src/components/common/AppConstants';
import axios from 'axios';
import Constants from 'expo-constants';
import Values from './src/components/common/Values';
import AppAsyncStorage from './src/components/common/AppAsyncStorage';
//require('./src/globals')
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      checkVersionStatus: appConstants.UNCHECKED
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'segoeuil': require('./assets/fonts/segoeuil.ttf'),
      'segoeuisb': require('./assets/fonts/segoeuisb.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    await this.getCategories()
    await this.getShops()
    this.setState({ fontLoaded: true });
  }

  getCategories = async () => {
    try {
      let res = await axios.get('https://tarjetaapp.herokuapp.com/categories/api');
      await AppAsyncStorage.storeData(appConstants.CATEGORIES, JSON.stringify(res.data))
    } catch (error) {
      console.log("error api categories =>" + error)
    }
  };

  getShops = async () => {
    try {
      let res = await axios.get('https://tarjetaapp.herokuapp.com/shops/api');
      await AppAsyncStorage.storeData(appConstants.SHOPS, JSON.stringify(res.data))
    } catch (error) {
      console.log("error api categories =>" + error)
    }
  };


  async checkAppVersion() {
    try {
      let response = await axios({
        method: 'get',
        url: "https://tarjetaapp.herokuapp.com/version",
        timeout: 1000
      })
      if (Constants.appOwnership == 'expo') {
        this.setState({
          checkVersionStatus: appConstants.UP_TO_DATE
        })
      } else {
        if (Constants.platform.android.versionCode < response.data.version) {
          this.setState({
            checkVersionStatus: appConstants.NEEDS_UPDATE
          })
        } else {
          this.setState({
            checkVersionStatus: appConstants.UP_TO_DATE
          })
        }
      }
    } catch (error) {
      console.log("error checking updates: " + error)
    }

  }
  render() {
    if (this.state.fontLoaded) {
      switch (this.state.checkVersionStatus) {
        case appConstants.UNCHECKED:
          this.checkAppVersion();
          return (
            <View style={styles.container}>
              <ActivityIndicator size='large' />
              <Text style={Values.styles.appText}>Revisando Actualizaciones</Text>
            </View>
          )
        case appConstants.NEEDS_UPDATE:
          return (
            <View style={[Values.styles.container, Values.styles.centered]}>
              <Text style={Values.styles.appText}>Necesitamos una actualización :)</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://play.google.com/store/apps/details?id=com.cerezabusiness.tarjetaapp')
                }}
                style={styles.btn}
              >
                <Text style={Values.styles.appText}>
                  Ir a Google Play
                </Text>
              </TouchableOpacity>
            </View>
          );
        case appConstants.UP_TO_DATE:

          return (
            <Router />
          );


      }
    }
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
        <Text>Cargando fuentes...</Text>
      </View>
    );



  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
  }
});