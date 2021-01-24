import React from 'react';
import HomeScreen from './../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import UserDetailScreen from './../screens/UserDetailScreen'
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
    UserDetailScreen: {
        screen: UserDetailScreen,
        navigationOptions: {
            header: null
        }
    },


}, {
    headerMode: "none"
});
export default DashboardNavigator;
