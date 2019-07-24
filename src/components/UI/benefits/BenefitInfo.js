import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Left, Button, Body, Icon, CardItem, Right } from 'native-base';
import { Button as Btn } from 'react-native-elements';
import Values from '../../common/Values';


class BenefitInfo extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null//navigation.getParam('otherParam', 'Home')
        }

    };
    constructor(props) {
        super(props);
        this.state = {
            favorite: false
        }
    }
    truncateString(str, len) {
        return str.substring(0, len) + "..."
    }
    render() {
        const benefit = this.props.shop.benefits[this.props.benefitId]
        return (
            <ScrollView style={styles.containter}>

                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active type={this.props.shop.category.icon_type} name={this.props.shop.category.icon_name} />
                            </Button>
                            <Body>
                                <Text style={{ fontFamily: 'segoeuisb', fontSize: 16 }}>{this.props.shop.shop_name}</Text>
                                <Text style={{ fontFamily: 'segoeuil', fontSize: 14 }} note>{this.props.shop.subtitle}</Text>
                            </Body>
                        </Left>
                        <Right>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity style={{marginRight: 8,}} onPress={() => {
                                    this.setState({
                                        favorite: !this.state.favorite
                                    })
                                }
                                }>
                                    <Icon
                                        style={{fontSize:30}}
                                        name={this.state.favorite ? "heart" : "heart-empty"} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={
                                    () => this.props.goBack()
                                }>
                                    <Text style={{ color: '#ccc', fontFamily: 'segoeuisb', fontSize: 30 }}>
                                    <Icon
                                        style={{fontSize:30}}
                                        name='close'/>
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <View style={{ height: 150, width: null, flex: 1, padding: 10, backgroundColor: '#f4f4f4', borderRadius: 2 }}>
                            <Image source={{ uri: this.props.shop.logo }}
                                style={{ height: 130, width: 130, alignSelf: 'center' }} />

                        </View>
                    </CardItem>
                    <CardItem style={{ paddingBottom: 0 }}>
                        <TouchableOpacity onPress={() => alert(benefit.details_and_terms)}>
                            <Text style={[{ fontFamily: 'segoeuil', fontSize: 18 }]}>
                                {this.truncateString(benefit.details_and_terms, 175)}
                            </Text>
                        </TouchableOpacity>


                    </CardItem>
                    <CardItem style={{ paddingTop: 0, paddingBottom: 0 }}>
                        <Text style={{ fontFamily: 'segoeuisb', fontSize: 18 }}>
                            BENEFICIO :
                        </Text>
                    </CardItem>
                    <CardItem style={{ paddingTop: 0, paddingBottom: 0 }}>
                        <Text style={{ fontFamily: 'segoeuil', fontSize: 18 }}>
                            {benefit.description}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <View style={{ width: null, flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                            {/* <Button style={{ alignItems:"center", padding:5,textAlign:'center',alignSelf: 'stretch',borderRadius:5,backgroundColor:'red' }}>
                                <Text style={{color:'white',fontFamily:'segoeuil',fontSize:20}}>
                                    Obtener Beneficio
                                </Text>
                            </Button> */}
                            <Btn
                                containerStyle={{ alignSelf: 'stretch' }}
                                titleStyle={[Values.styles.appText, { color: 'white' }]}
                                buttonStyle={[styles.btn]}
                                onPress={
                                    () => {
                                        alert("Muestra el código 45789600 a tu tienda")

                                    }
                                }
                                title="Obtener beneficio"
                            />
                        </View>
                    </CardItem>
                </Card>
                <View style={{ height: 20 }}>

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    containter: {
        backgroundColor: '#efeef4',
        padding: 10,
        flex: 1
    },
    btn: {
        backgroundColor: 'red',
        height: 33,
        marginTop: 2
    }
});
export default BenefitInfo;