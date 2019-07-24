/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React, { Component } from 'react';
import { View, StyleSheet, Image, PixelRatio, Text } from 'react-native';
import Constants from 'expo-constants';
import Values from '../common/Values';
import { Item, Label, Input } from 'native-base';
import { Button } from 'react-native-elements';
import appConstants from '../common/AppConstants';
import Loader from '../common/Loader';
import * as SecureStore from 'expo-secure-store';
import Axios from 'axios';
import { NavigationEvents } from 'react-navigation';

/* Adobe XD React Exporter has dropped some elements not supported by react-native-svg: style */
const loadingStatus = ["Cargando datos del usuario", 'ok']
class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }

  };
  constructor(props) {
    super(props);
    this.state = {
      loadingStatusIndex: 0,
      userData: {
        email: '',
        password: '',
      },
    }
    this.checkUserData();
  }
  onChangeText(value, field) {
    let userDataCopy = {}
    Object.assign(userDataCopy, this.state.userData);
    userDataCopy[field] = value;
    this.setState({
      userData: userDataCopy
    })
  }
  async checkUserData() {
    let userInfo = JSON.parse(await SecureStore.getItemAsync(appConstants.USER_INFO));
    if (userInfo != null && userInfo.user) {
      this.goTo(appConstants.DRAWER_HOME);
    } else {
      this.setState({
        loadingStatusIndex: 1
      })
    }
  }

  goTo(page, params = {}) {
    const { navigate } = this.props.navigation;
    navigate(page, params)
    // alert("clicked")
  }
  async login() {
    this.setState({
      isLoading: true
    })
    try {
      let response = await Axios.post('https://tarjetaapp.herokuapp.com/users/api/auth/signin'
        , this.state.userData)
      if (response.data.token) {
        await SecureStore.setItemAsync(appConstants.USER_INFO, JSON.stringify(response.data))
        alert('Bienvenido, ' + response.data.user.name)
        this.setState({
          isLoading: false
        })
        this.goTo(appConstants.DRAWER_HOME)
      }
    } catch (error) {
      console.log(error)
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        switch (error.response.status) {
          case 400:
            alert('lo sentimos no hay coincidencias');
            this.setState({
              userData: {
                email: '',
                password: '',
              }
            })
            break;
          default:
            alert('un error ha ocurrido');
            break;
        }
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        //console.log(error.request.response);
        alert('No estás conectado a internet');
        this.setState({
          userData: {
            email: '',
            password: '',
          }
        })
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);

    }
  }

  render() {
    if (this.state.loadingStatusIndex == 0) {
      return (
        <View style={[Values.styles.container]}>
          <NavigationEvents
            onWillFocus={payload => console.log('will focus', payload)}
            onDidFocus={() => this.checkUserData()}
            onWillBlur={payload => console.log('will blur', payload)}
            onDidBlur={payload => console.log('did blur', payload)}
          />
          <Loader message={loadingStatus[this.state.loadingStatusIndex]} />
        </View>)
    }
    return (
      <View
        style={[Values.styles.container, styles.container]}
      >

        <View style={[styles.logoContainer, Values.styles.centered]}>
          <Image style={styles.logo} source={require('./img/logo.png')} />
        </View>
        <View style={styles.formContainer}>
          <View style={[styles.formTitle, Values.styles.centered]}>
            <Text style={[styles.formText, styles.marginEqual]}>
              BIENVENIDOS A UN MUNDO DE BENEFICIOS
            </Text>
          </View>

          <View style={
            [styles.form, Values.styles.centered, styles.marginEqual]
          }>
            <Item style={styles.formInput} floatingLabel>
              <Label style={[styles.formText, styles.marginBottom]}>Correo o teléfono</Label>
              <Input value={this.state.userData['email']}
                onChangeText={
                  (text) => {
                    this.onChangeText(text, 'email')
                  }
                } style={[styles.formText]} form />
            </Item>
            <Item style={styles.formInput} floatingLabel>
              <Label style={[styles.formText, styles.marginBottom]}>Clave</Label>
              <Input value={this.state.userData['password']}
                onChangeText={
                  (text) => {
                    this.onChangeText(text, 'password')
                  }
                } style={[styles.formText]} secureTextEntry={true} />
            </Item>
            <Button
              containerStyle={{ alignSelf: 'stretch' }}
              titleStyle={[styles.formText, { color: 'red' }]}
              buttonStyle={[styles.btn]}
              onPress={
                () => {
                  this.login();
                }
              }
              title="Ingresa"
            />
          </View>
        </View>
        <View style={styles.socialLoginContainer}>
          <View style={
            [styles.form, { alignItems: 'center' }, styles.marginEqual]
          }>
            <Button
              containerStyle={{ alignSelf: 'stretch' }}
              titleStyle={[styles.formText, { color: 'white' }]}
              buttonStyle={[styles.btn, { backgroundColor: '#3B5998' }]}
              title="Ingresa con Facebook"
            />
            <Button
              containerStyle={{ alignSelf: 'stretch' }}
              titleStyle={[styles.formText, { color: 'white' }]}
              buttonStyle={[styles.btn, { backgroundColor: '#0F9D58' }]}
              title="Ingresa con Google"

            />

            <Text
              style={[styles.formText, { alignSelf: 'stretch' }, { marginTop: 20 }]}
              onPress={() => this.goTo(appConstants.REGISTER_CARD, {})}
            >
              Registra <Text style={{ textDecorationLine: 'underline' }}>aquí</Text> tu tarjeta si aún no eres socio
            </Text>
          </View>
        </View>


      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
  },
  logo: {
    width: 224,//PixelRatio.getPixelSizeForLayoutSize(126),
    height: 62//PixelRatio.getPixelSizeForLayoutSize(35),
  },
  logoContainer: {
    flex: 0.46
  },
  formContainer: {
    flex: 1,
  },
  formTitle: {
    flex: 0.20
  },
  form: {
    flex: 1
  },
  formText: {
    fontFamily: 'segoeuil',
    textAlign: 'center',
    color: 'white',
    fontSize: 20// fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  formInput: {
    borderColor: 'white',
    padding: 5,
    color: 'white',
    marginBottom: 5,
  },
  btn: {
    backgroundColor: 'white',
    height: 33,
    marginTop: 5//PixelRatio.getPixelSizeForLayoutSize(5)
  },
  socialLoginContainer: {
    flex: 0.66,

  },
  marginEqual: {
    marginLeft: 68, //cambió con respecto a XD
    marginRight: 68,//cambió con respecto a XD
  },
  marginBottom: {
    marginBottom: 2//PixelRatio.getPixelSizeForLayoutSize(2)
  },


});



export default Login;
