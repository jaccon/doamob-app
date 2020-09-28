import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from '../screens/Main';
import News from '../screens/News';
import Photos from '../screens/Photos';
import Donations from '../screens/Donations';

const BottomTabNavigator = createBottomTabNavigator({
  Main: Main,
  News: News,
  Photos: Photos,
  Donations: Donations,
}, {
  tabBarOptions: {
    showLabel: false
    
  }
});

export default BottomTabNavigator;
