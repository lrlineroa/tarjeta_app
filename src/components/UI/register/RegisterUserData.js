import React, { Component } from 'react';
import Values from "../../common/Values";
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Item, Label, Input, Right, Icon, Button as Btn } from 'native-base';
import { Button } from 'react-native-elements';
import appConstants from '../../common/AppConstants';
import Axios from 'axios';
import { isLoading } from 'expo-font';
import Loader from '../../common/Loader';
import * as SecureStore from 'expo-secure-store';

class RegisterUserData extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }

    };
    constructor(props) {
        super(props);
        this.state = {
            secureTextEntry: true,
            userData: {
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                password: '',
            },
            isLoading:false
        }
    }
    onChangeText(value, field) {
        let userDataCopy = {}
        Object.assign(userDataCopy, this.state.userData);
        userDataCopy[field] = value;
        this.setState({
            userData: userDataCopy
        })
    }
    async doRegister() {
        this.setState({
            isLoading:true
        })
        try {
            let data = this.state.userData;
            data2Send = {
                name: data.first_name + ' ' + data.last_name,
                email: data.email,
                phone_number: data.phone_number,
                password: data.password
            }
            let response=await Axios.post('https://tarjetaapp.herokuapp.com/users/api'
                , data2Send)
            if(response.data.token){
                await SecureStore.setItemAsync(appConstants.USER_INFO, JSON.stringify(response.data))
                alert('que bien te registraste')
                this.setState({
                    isLoading:false
                })
                this.goTo(appConstants.DRAWER_HOME)
            }
        } catch (error) {
            console.log(error)
        }
    }
    goTo(page) {
        this.props.navigation.navigate(page);
    }
    render() {
        if(this.state.isLoading){
            return (<Loader message='Registrandote...'/>)
        }
        return (
            <ScrollView style={[Values.styles.container, styles.container]}>
                <Image style={styles.logo} source={require('../img/logo.png')} />
                <Text style={[styles.formText, styles.marginEqual]}>
                    REGÍSTRATE PARA EMPEZAR A DISFRUTAR
                </Text>
                <View style={[styles.marginEqual, { flex: 1 }]}>
                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Nombre</Label>
                        <Input
                            value={this.state.userData['first_name']}
                            onChangeText={
                                text => { this.onChangeText(text, 'first_name') }
                            }
                            style={[styles.formText]} form />
                    </Item>
                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Apellido</Label>
                        <Input
                            value={this.state.userData['last_name']}
                            onChangeText={
                                text => { this.onChangeText(text, 'last_name') }
                            }
                            style={[styles.formText]} form />
                    </Item>

                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Correo electrónico</Label>
                        <Input
                            value={this.state.userData['email']}
                            onChangeText={
                                text => { this.onChangeText(text, 'email') }
                            }
                            style={[styles.formText]} form />
                    </Item>

                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Teléfono</Label>
                        <Input
                            value={this.state.userData['phone_number']}
                            onChangeText={
                                text => { this.onChangeText(text, 'phone_number') }
                            }
                            style={[styles.formText]} form />
                    </Item>

                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Clave</Label>
                        <Input
                            value={this.state.userData['password']}
                            onChangeText={
                                text => { this.onChangeText(text, 'password') }
                            }
                            style={[styles.formText]} form secureTextEntry={this.state.secureTextEntry} />

                    </Item>
                    <Right>
                        <Btn
                            onPress={() => {
                                this.setState({
                                    secureTextEntry: !this.state.secureTextEntry
                                })
                            }}
                            transparent>
                            <Icon name={this.state.secureTextEntry ? 'eye' : 'eye-off'} />
                        </Btn>
                    </Right>
                    <Button
                        containerStyle={{ marginTop: 25, alignSelf: 'stretch' }}
                        titleStyle={[styles.formText, { color: 'red' }]}
                        buttonStyle={[styles.btn]}
                        onPress={
                            () => {
                                
                                this.doRegister()
                            }
                        }
                        title="Registrarse"
                    />

                </View>
            </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    logo: {
        marginTop: 58,
        marginBottom: 28, //cambió respecto a XD
        alignSelf: 'center',
        width: 224,//PixelRatio.getPixelSizeForLayoutSize(126),
        height: 62//PixelRatio.getPixelSizeForLayoutSize(35),
    },
    formText: {
        fontFamily: 'segoeuil',
        textAlign: 'center',
        color: 'white',
        fontSize: 20// fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    },
    marginEqual: {
        marginLeft: 68,
        marginRight: 68,
    },
    formInput: {
        borderColor: 'white',
        padding: 2,
        color: 'white',
        marginBottom: 5,
    },
    marginBottom: {
        marginBottom: 2//PixelRatio.getPixelSizeForLayoutSize(2)
    },
    btn: {
        backgroundColor: 'white',
        height: 33,
        marginTop: 5//PixelRatio.getPixelSizeForLayoutSize(5)
    },
})

export default RegisterUserData;