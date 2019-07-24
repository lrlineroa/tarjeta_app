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

/* Adobe XD React Exporter has dropped some elements not supported by react-native-svg: style */
const loadingStatus=["Cargando datos del usuario",'ok']
class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }

  };
  constructor(props) {
    super(props);
    this.state={
      loadingStatusIndex:0
    }
    this.checkUserData();
  }
  async checkUserData(){
   let userInfo=JSON.parse(await SecureStore.getItemAsync(appConstants.USER_INFO));
   if(userInfo!= null && userInfo.user){
     this.goTo(appConstants.DRAWER_HOME);
   }else{
     this.setState({
      loadingStatusIndex:1
     })
   }
  }

  goTo(page, params = {}) {
    const { navigate } = this.props.navigation;
    navigate(page, params)
    // alert("clicked")
  }


  render() {
    if(this.state.loadingStatusIndex==0){
      return(<Loader message={loadingStatus[this.state.loadingStatusIndex]}/>)
    }
    return (
      <View
        style={[Values.styles.container,styles.container]}
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
              <Input style={[styles.formText]} form />
            </Item>
            <Item style={styles.formInput} floatingLabel>
              <Label style={[styles.formText, styles.marginBottom]}>Clave</Label>
              <Input style={[styles.formText]} secureTextEntry={true} />
            </Item>
            <Button
              containerStyle={{ alignSelf: 'stretch' }}
              titleStyle={[styles.formText, { color: 'red' }]}
              buttonStyle={[styles.btn]}
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
    marginBottom:5,
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
