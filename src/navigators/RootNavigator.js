import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashboardNavigator from './DashboardNavigator';
import SplashScreen from '../screens/SplashScreen';

const RootNavigator = createSwitchNavigator({
    SplashScreen: SplashScreen,
    Dashboard: DashboardNavigator,
},
    { initialRouteName: 'SplashScreen' },
);

export default RootNavigator;
