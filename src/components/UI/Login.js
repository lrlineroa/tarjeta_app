/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React, { Component } from 'react';
import { View, StyleSheet, Image, PixelRatio, Text } from 'react-native';
import { Constants } from 'expo';
import Values from '../common/Values';
import { Content, Form, Item, Label, Input, Button } from 'native-base';



/* Adobe XD React Exporter has dropped some elements not supported by react-native-svg: style */

class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null//navigation.getParam('otherParam', 'Home')
    }

  };
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={[styles.logoContainer, Values.styles.centered]}>
          <Image style={styles.logo} source={require('./img/logo.png')} />
        </View>
        <View style={styles.formContainer}>
          <View style={[styles.formTitle, Values.styles.centered]}>
            <Text style={[styles.formText,styles.marginEqual]}>
              BIENVENIDOS A UN MUNDO DE BENEFICIOS
            </Text>
          </View>
          <View style={[styles.form]}>
            <Content>
              <Form style={
                [styles.marginEqual]
              }>
                <Item style={styles.formInput} floatingLabel>
                  <Label style={[styles.formText,styles.marginBottom]}>Correo o teléfono</Label>
                  <Input style={[styles.formText]} form/>
                </Item>
                <Item style={styles.formInput} floatingLabel>
                  <Label style={[styles.formText,styles.marginBottom]}>Clave</Label>
                  <Input style={[styles.formText]} secureTextEntry={true}/>
                </Item>
                <Button style={styles.loginButton} textStyle={{color:'red'}} block light>
                  <Text> Ingresar </Text>
                </Button>
              </Form>
            </Content>
          </View>
        </View>
        <View style={styles.socialLoginContainer}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ff0000',

  },
  logo: {
    width: PixelRatio.getPixelSizeForLayoutSize(126),
    height: PixelRatio.getPixelSizeForLayoutSize(35),
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
    textAlign: 'center',
    color: 'white',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  formInput:{
    borderColor:'white',
    padding:5,
    color:'white'
  },
  loginButton:{
    color:'red',
    marginTop:PixelRatio.getPixelSizeForLayoutSize(5)
  },
  socialLoginContainer: {
    flex: 0.66,
    
  },
  marginEqual:{
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(20),
    marginRight: PixelRatio.getPixelSizeForLayoutSize(20),
  },
  marginBottom:{
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(2)
  },
 

});

export default Login;
