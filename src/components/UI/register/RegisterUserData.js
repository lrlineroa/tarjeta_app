import React, { Component } from 'react';
import Values from "../../common/Values";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Item, Label, Input } from 'native-base';
import { Button } from 'react-native-elements';
class RegisterUserData extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }

    };
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={[Values.styles.container, styles.container]}>
                <Image style={styles.logo} source={require('../img/logo.png')} />
                <Text style={[styles.formText, styles.marginEqual]}>
                    REGÍSTRATE PARA EMPEZAR A DISFRUTAR
                </Text>
                <View style={[Values.styles.container, styles.marginEqual]}>
                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Nombre</Label>
                        <Input style={[styles.formText]} form />
                    </Item>
                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Apellido</Label>
                        <Input style={[styles.formText]} form />
                    </Item>

                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Correo electrónico</Label>
                        <Input style={[styles.formText]} form />
                    </Item>

                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Teléfono</Label>
                        <Input style={[styles.formText]} form />
                    </Item>

                    <Item style={styles.formInput} floatingLabel>
                        <Label style={[styles.formText, styles.marginBottom]}>Clave</Label>
                        <Input style={[styles.formText]} form />
                    </Item>
                    <Button
                        containerStyle={{ marginTop: 50,alignSelf: 'stretch' }}
                        titleStyle={[styles.formText, { color: 'red' }]}
                        buttonStyle={[styles.btn]}
                        onPress={
                            ()=>alert("Que bien, te registraste")
                        }
                        title="Registrarse"
                    />

                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    logo: {
        marginTop: 58,
        marginBottom:15, //cambió respecto a XD
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
        color: 'white'
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