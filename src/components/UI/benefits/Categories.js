import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ScrollView} from 'react-native';
import { ListItem, Button, Body, Left, Icon, Right } from 'native-base';

import Values from '../../common/Values';
import AppAsyncStorage from '../../common/AppAsyncStorage';
import appConstants from '../../common/AppConstants';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
        this.loadCategories();
    }
    async loadCategories() {
        let categoriesArray = await AppAsyncStorage.retrieveData(appConstants.CATEGORIES)
        this.setState({
            categories: categoriesArray != null ? JSON.parse(categoriesArray) : []
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={[styles.cardImageContainer, Values.styles.centered]}>
                    <Image style={styles.cardImage} source={require('../img/tarjeta.png')} />
                </View>
                {this.state.categories.map((category, key) => {
                    return (
                        <ListItem key={key} icon>
                            <Left>
                                <Button style={{ backgroundColor: "#FF9501" }}>
                                    <Icon active type={category.icon_type} name={category.icon_name} />
                                </Button>
                            </Left>
                            <Body>
                                <Text
                                    style={styles.itemText}
                                >{category.category_name}</Text>
                            </Body>
                            <Right>
                                <Icon active name="arrow-dropright" />
                            </Right>
                        </ListItem>
                    )
                })}
            </ScrollView>);
    }
}

export default Categories;

const styles = StyleSheet.create({
    itemText: {
        fontSize: 20,
        fontFamily: 'segoeuil',

    }, cardImage: {
        height: 127,
        width: 204
    },
    cardImageContainer: {
        height: 170,
        backgroundColor: 'white',
    }
})