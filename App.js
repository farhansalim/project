
import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import RootNavigator from './src/navigators/RootNavigator';
import store from './store/Store'
import { StatusBar } from 'react-native'
import HomeComponent from './src/components/home/HomeComponent';

const AppContainer = createAppContainer(RootNavigator);

class App extends Component {
  render() {
    return (
      // <HomeComponent/>
      <Provider store={store}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <AppContainer />
      </Provider>
    )
  }
}
export default App

