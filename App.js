
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/UI/Login';

const MainNavigator = createStackNavigator({
  Login: { screen: Login  },
 

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


const App = createAppContainer(MainNavigator);

export default App;
