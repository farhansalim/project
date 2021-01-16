import React from 'react';
import CustomIcon from '../components/common/CustomIcon';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import CompleteScreen from './../screens/CompleteScreen'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/MaterialIcons';

import { createStackNavigator } from 'react-navigation-stack';


const DashboardNavigator = createStackNavigator({

    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },

    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    CompleteScreen: {
        screen: CompleteScreen,
        navigationOptions: {
            header: null
        }
    },


}, {
    headerMode: "none"
});
export default DashboardNavigator;
