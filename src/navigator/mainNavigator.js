import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile172921Navigator from '../features/UserProfile172921/navigator';
import Maps172777Navigator from '../features/Maps172777/navigator';
import Additem172776Navigator from '../features/Additem172776/navigator';
import Maps172772Navigator from '../features/Maps172772/navigator';
import UserProfile172768Navigator from '../features/UserProfile172768/navigator';
import Maps172709Navigator from '../features/Maps172709/navigator';
import Additem172708Navigator from '../features/Additem172708/navigator';
import Maps172704Navigator from '../features/Maps172704/navigator';
import UserProfile172700Navigator from '../features/UserProfile172700/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile172921: { screen: UserProfile172921Navigator },
Maps172777: { screen: Maps172777Navigator },
Additem172776: { screen: Additem172776Navigator },
Maps172772: { screen: Maps172772Navigator },
UserProfile172768: { screen: UserProfile172768Navigator },
Maps172709: { screen: Maps172709Navigator },
Additem172708: { screen: Additem172708Navigator },
Maps172704: { screen: Maps172704Navigator },
UserProfile172700: { screen: UserProfile172700Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
