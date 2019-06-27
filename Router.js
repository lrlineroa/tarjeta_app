import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/UI/Login';
import RegisterCard from './src/components/UI/QR/RegisterCard';


import RegisterUserData from './src/components/UI/register/RegisterUserData';

const MainNavigator = createStackNavigator({
  RegisterUserData: { screen: RegisterUserData },
  Login: { screen: Login },
  RegisterCard: { screen: RegisterCard },
  
},
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#9eb934',
        alignContent: 'center',

      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft: 0
      },
    },
  }
);


const Router = createAppContainer(MainNavigator);

export default Router;