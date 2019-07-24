
import axios from 'axios';
import AppAsyncStorage from './components/common/AppAsyncStorage';
import appConstants from './components/common/AppConstants';
import * as SecureStore from 'expo-secure-store';

setFoo=async ()=>{
    await SecureStore.setItemAsync("foo", "bares")
}
getCategories = async () => {
    try {
        let res = await axios.get('https://tarjetaapp.herokuapp.com/categories/api');
        await AppAsyncStorage.storeData(appConstants.CATEGORIES,JSON.stringify(res.data))
    } catch (error) {
        console.log("error api categories =>"+error)
    }
};

getShops = async () => {
    try {
        let res = await axios.get('https://tarjetaapp.herokuapp.com/shops/api');
        await AppAsyncStorage.storeData(appConstants.SHOPS,JSON.stringify(res.data))
    } catch (error) {
        console.log("error api categories =>"+error)
    }
};

getCategories()
getShops()
setFoo()
// console.log("categories: "+JSON.stringify(getCategoriesFromApi()))