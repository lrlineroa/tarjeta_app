import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Permissions, BarCodeScanner } from 'expo';
import Values from '../../common/Values';
import appConstants from '../../common/AppConstants';
import Constants from 'expo-constants';
import privateKeyJson from "../../../../keys/dev_private_key.json"
class RegisterCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            scanned: false,
        }
        
        
    }
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }

    };
    goTo(page, params = {}) {
        const { navigate } = this.props.navigation;
        navigate(page, params)
    }
    handleBarCodeScanned = ({ type, data }) => {

        this.setState({
            scanned:true
        })
        alert('Tarjeta Escaneada, Completa tus datos');
        this.goTo(appConstants.REGISTER_USER_DATA)
    };
    render() {
        const { hasCameraPermission, scanned } = this.state;
        if (hasCameraPermission === null) {
            return (
                <View style={[Values.styles.container, Values.styles.centered]}>
                    <Text style={Values.styles.promptTitle}>Esperando los permisos de cámara</Text>
                </View>

            )
        }
        if (hasCameraPermission === false) {
            return (
                <View style={[Values.styles.container, Values.styles.centered]}>
                    <Text style={Values.styles.promptTitle}>Sin Acceso a la cámara</Text>
                </View>

            )

        }
        return (<View style={[Values.styles.container]}>
            <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}
                />
            <View style={styles.qrReaderContainer}>
                <Image style={styles.qrFrame} source={require('../img/qrFrame.png')} />
            </View>
            <View style={styles.imageContainer}>
                <Text style={[styles.title, styles.marginEqual]}>Apunta con tu cámara al código que figura en tu tarjeta</Text>
                <Image style={[styles.image]} source={require('../img/image1.png')} />
            </View>
        </View>);
    }
}
const styles = StyleSheet.create({
    qrReaderContainer: {
        paddingTop: Constants.statusBarHeight,
        flex:1,
        height: 320, //cambió con respecto a XD
        //justifyContent: 'center',
        alignItems: 'center',
    },
    qrFrame:{
        alignSelf:'center',
        height:254,//cambió con respecto a XD
        width:250.98,//cambió con respecto a XD
    },
    imageContainer: {
        flex: 1,
        backgroundColor:'white'
    },
    title: {
        paddingTop: 18,
        fontFamily: 'segoeuil',
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
    },
    image: {
        height: 200,
        width: 313,
        alignSelf: 'center',
        marginTop: 11,
    },
    marginEqual: {
        marginLeft: 43,
        marginRight: 43,
    },
})
export default RegisterCard;