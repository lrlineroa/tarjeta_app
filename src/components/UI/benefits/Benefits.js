import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { CardItem, Card, Body, Button, Left, Text, Icon } from 'native-base';
import AppAsyncStorage from '../../common/AppAsyncStorage';
import appConstants from '../../common/AppConstants';
import Values from '../../common/Values';
import BenefitInfo from './BenefitInfo';

class Benefits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            shops: [],
            selectedBenefit: null,
            selectedShop:null
        }
        this.loadShops()
    }

    async loadShops() {
        let shopsArray = await AppAsyncStorage.retrieveData(appConstants.SHOPS)
        let categoriesArray = await AppAsyncStorage.retrieveData(appConstants.CATEGORIES)
        if (shopsArray != null) {
            shops = JSON.parse(shopsArray);
            categories = JSON.parse(categoriesArray)
            shops.forEach(shop => {
                let category = categories.find((c) => {
                    return c._id == shop.category_id
                })
                if (category != null) {
                    shop.category = category
                }
            });
            this.setState({
                shops: shops
            })
        }

    }
    goBack() {
        this.setState({
            selectedBenefit: null
        })
    }
    render() {
        if (this.state.selectedBenefit != null) {
            return (
                <BenefitInfo
                    benefitId={this.state.selectedBenefit}
                    shop={this.state.selectedShop}
                    goBack={() => this.goBack()}
                    
                />
            )
        }
        return (
            <ScrollView style={[styles.containter]} >

                {this.state.shops.map(
                    (shop, i) => {
                        return shop.benefits.map(
                            (benefit, j) => {
                                return (
                                    <TouchableOpacity onPress={
                                        () => {
                                           this.setState({
                                                selectedBenefit: j,
                                                selectedShop: shop,
                                            })
                                        }
                                    } key={"benefit_" + i + "_" + j}>
                                        <Card>
                                            <CardItem>
                                                <Left>
                                                    <Button style={{ backgroundColor: "#FF9501" }}>
                                                        <Icon active type={shop.category.icon_type} name={shop.category.icon_name} />
                                                    </Button>
                                                    <Body>
                                                        <Text style={{fontFamily:'segoeuisb',fontSize:16}}>{shop.shop_name}</Text>
                                                        <Text style={{fontFamily:'segoeuil',fontSize:14}} note>{shop.subtitle}</Text>
                                                    </Body>
                                                </Left>
                                            </CardItem>
                                            <CardItem cardBody>
                                                <View style={{ height: 200, width:null,flex:1,padding:10,backgroundColor:'#f4f4f4',borderRadius:2}}>
                                                    <Image source={{ uri: shop.logo }}
                                                        style={{ height: 180, width: 180, alignSelf: 'center' }} />

                                                </View>


                                            </CardItem>
                                            <CardItem>
                                                <Text style={[{ fontFamily:'segoeuisb',fontSize:16, textAlign: 'center' }]}>
                                                    {benefit.description}
                                                </Text>
                                            </CardItem>
                                        </Card>
                                    </TouchableOpacity>
                                )
                            }
                        )
                    }
                )}
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
    }
});
export default Benefits;