import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Permissions, BarCodeScanner } from 'expo';
import Values from '../../common/Values';
import appConstants from '../../common/AppConstants';
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
            <View style={styles.qrReaderContainer}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}
                />
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
        alignSelf: 'stretch',
        height: 300, //cambió con respecto a XD
        backgroundColor: 'red'
    },
    imageContainer: {
        flex: 1
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