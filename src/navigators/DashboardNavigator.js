import React from 'react';
import CustomIcon from '../components/common/CustomIcon';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SearchScreen from './../screens/SearchScreen'
import Fonts from './../components/common/Fonts';
import NoContentScreen from './../screens/NoContentScreen'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
const DashboardNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: SearchScreen,
        },
        Cart: {
            screen: NoContentScreen,
        },
        Order: {
            screen: NoContentScreen,

        },
        Profile: {
            screen: NoContentScreen,
        },

    },
    {
        tabBarOptions: {
            activeTintColor: '#1483FE',
            inactiveTintColor: '#9095A7',
            style: {
                height: 53,
            },
            labelStyle: {
                fontFamily: Fonts.OpenSansBold,
                fontSize: 10,
                color: '#9095A7',
                textTransform: 'uppercase',
                marginBottom: 5,
            },
        },

        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                let iconSize;
                switch (routeName) {
                    case 'Search':
                        iconSize = 20;
                        iconName = 'search';
                        break;
                    case 'Cart':

                        iconSize = 23;
                        iconName = 'shopping-cart';
                        break;
                    case 'Order':

                        iconSize = 20;
                        iconName = 'truck';
                        break;
                    case 'Profile':

                        iconSize = 23;
                        iconName = 'user';
                        break;

                }
                return <Icon name={iconName} size={iconSize} color={tintColor}></Icon>;
             

            },
        }),
    },
);

export default DashboardNavigator;
