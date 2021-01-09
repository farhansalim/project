
import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import RootNavigator from './src/navigators/RootNavigator';
import store from './store/Store'
import { StatusBar } from 'react-native';


const AppContainer = createAppContainer(RootNavigator);

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <StatusBar backgroundColor="#3fc0eb" barStyle="light-content" />
        <AppContainer />
      </Provider>
    )
  }
}
export default App

