import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Card, Left, Button, Body, Icon,CardItem } from 'native-base';
import Values from '../../common/Values';


class BenefitInfo extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null//navigation.getParam('otherParam', 'Home')
        }

    };
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ScrollView style={styles.containter}>
                <TouchableOpacity onPress={
                    () => this.props.goBack()
                }>
                    <Text>
                        Volver
                    </Text>
                </TouchableOpacity>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active type={this.props.shop.category.icon_type} name={this.props.shop.category.icon_name} />
                            </Button>
                            <Body>
                                <Text>{this.props.shop.shop_name}</Text>
                                <Text note>{this.props.shop.subtitle}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <View style={{ height: 200, width: null, flex: 1 }}>
                                <Image source={{ uri: this.props.shop.logo }}
                                    style={{ height: 200, width: 200, alignSelf: 'center' }} />

                            </View>
                            <Text>
                            //Your text here
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
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
export default BenefitInfo;