import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import CityWeathersScreen from '../screens/CityWeathersScreen'
import AuthCheckScreen from '../screens/AuthCheckScreen'

import { Icon } from 'expo'

const SignedInTab = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Favorites: FavoritesScreen
  }
)
const PublicStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen })
const PrivateStack = createStackNavigator({ Tab: SignedInTab, Forecast: CityWeathersScreen })
    
export default createSwitchNavigator(
  {
    PrivateStack,
    PublicStack
  },
  {
    initialRouteName: 'PublicStack',
  }
);