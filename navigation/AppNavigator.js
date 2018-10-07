import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import CityWeathersScreen from '../screens/CityWeathersScreen'
import AuthCheckScreen from '../screens/AuthCheckScreen'

const SignedInStack = createStackNavigator({ Home: HomeScreen, Favorites: FavoritesScreen, Forecast: CityWeathersScreen })
const SignedOutStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen })

export default createSwitchNavigator(
  {
    AuthCheck: AuthCheckScreen,
    SignedIn: SignedInStack,
    SignedOut: SignedOutStack
  },
  {
    initialRouteName: 'AuthCheck',
  }
);