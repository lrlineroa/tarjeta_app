import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/UI/Login';
import RegisterCard from './src/components/UI/QR/RegisterCard';
import RegisterUserData from './src/components/UI/register/RegisterUserData';
// import Home from './src/components/UI/Home';
import DrawerHome from './src/components/UI/DrawerHome';
import BenefitInfo from './src/components/UI/benefits/BenefitInfo';

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  RegisterUserData: { screen: RegisterUserData },
  DrawerHome: { screen: DrawerHome },
  BenefitInfo: { screen: BenefitInfo },
  RegisterCard: { screen: RegisterCard },
},
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f00',
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