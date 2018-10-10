import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import CityWeathersScreen from '../screens/CityWeathersScreen'
import AuthCheckScreen from '../screens/AuthCheckScreen'

import { Icon } from 'expo'

const SignedInStack = createStackNavigator({ Home: HomeScreen, Forecast: CityWeathersScreen })
const SignedInTab = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Favorites: FavoritesScreen
  },
  /*{
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Icon.Ionicos
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? 'ios-home'
              : 'md-home'
          }
        />
      )
    }
  }*/
)
const SignedOutStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen })

export default createSwitchNavigator(
  {
    AuthCheck: AuthCheckScreen,
    SignedIn: SignedInStack,
    SignedOut: SignedOutStack,
    SignedInTab
  },
  {
    initialRouteName: 'AuthCheck',
  }
);