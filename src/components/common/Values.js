import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export default values = {
    styles: StyleSheet.create({
        centered: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        container: {
            flex: 1,
            paddingTop: Constants.statusBarHeight,
        },
        promptTitle:{
            fontSize:20,
            fontFamily: 'segoeuil',
        },
        appText:{
            fontSize:20,
            fontFamily: 'segoeuil',
        }
    }),

}