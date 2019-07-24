import Home from "./Home";
import Profile from './Profile';
import { createDrawerNavigator} from 'react-navigation';
import CustomDrawerContentComponent from '../common/CustomDrawerContentComponent';

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Perfil: {
    screen: Profile,
  },
  Favoritos: {
    screen: Profile,
  },
  "Mis puntos": {
    screen: Profile,
  },
  Historial: {
    screen: Profile,
  },
  Mapa: {
    screen: Profile,
  },
},
  {
    contentComponent: CustomDrawerContentComponent,
   
  });
export default MyDrawerNavigator;
