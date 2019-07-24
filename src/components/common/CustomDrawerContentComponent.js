import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Button } from 'native-base';
import * as SecureStore from 'expo-secure-store';
import appConstants from './AppConstants';
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <Button onPress={
        () => {
          SecureStore.deleteItemAsync(appConstants.USER_INFO)
          props.navigation.dangerouslyGetParent().navigate(appConstants.LOGIN);
        }
      } block>
        <Text>Cerrar sesión</Text>
      </Button>
    </SafeAreaView>

  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContentComponent;