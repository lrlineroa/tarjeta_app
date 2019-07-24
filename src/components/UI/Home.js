import { Text, StyleSheet, } from 'react-native';
import React, { Component } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Categories from './benefits/Categories';
import Benefits from './benefits/Benefits';
import { Header, Container, Button, Icon, Left, Body, Title } from 'native-base';
import * as SecureStore from 'expo-secure-store';
class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Tarjeta APP',
    };
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Categorías' },
                { key: 'second', title: 'Beneficios' },
            ],
        };
        // this.getFoo();
        
    }
    // async getFoo(){
    //     let bar=await SecureStore.getItemAsync('foo');
    //     alert('foo:'+bar)
    // }
    tabBar = props =>
        <TabBar
            {...props}
            renderLabel={({ route }) => (
                <Text style={{ fontFamily: 'segoeuil', fontSize: 20, color: 'red', margin: 8 }}>
                    {route.title}
                </Text>
            )}
            indicatorStyle={{ backgroundColor: 'red' }}
            style={{
                height:55,
                backgroundColor: '#fefafa',
            }}
        />;
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: 'red' }}>
                    <Left>
                        <Button onPress={() => {
                            this.props.navigation.openDrawer()
                        }} transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ fontFamily: 'segoeuil' }}>Tarjeta App</Title>
                    </Body>

                </Header>

                <TabView

                    renderTabBar={this.tabBar}
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: Categories,
                        second: Benefits
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={styles.tabView}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabView: {
        flex: 1
    }
})

export default Home;