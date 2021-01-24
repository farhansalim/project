import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SignUpScreen from './../screens/SignUpScreen'
import LoginScreen from './../screens/LoginScreen'

const AuthNavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },

    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            header: null
        }
    },


}, {
    headerMode: "none"
});
export default AuthNavigator;
