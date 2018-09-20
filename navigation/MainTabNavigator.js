import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CityWeathersScreen from '../screens/CityWeathersScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  WeatherScreen: CityWeathersScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen,
});

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-heart-${focused ? '' : '-empty'}`
          : 'md-heart'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  FavoritesStack
});
