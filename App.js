import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createBottomTabNavigator, createStackNavigator,} from 'react-navigation'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

const MainNavigator = createBottomTabNavigator({
      welcome: WelcomeScreen,
      auth:  AuthScreen,
      main: createBottomTabNavigator({
           map: MapScreen,
           deck: DeckScreen,
           review: createStackNavigator({
                  review: ReviewScreen,
                  settings: SettingsScreen,
             })
        }),
    })

const AppContainer = createAppContainer(MainNavigator);

 class App extends React.Component {
  render() {
      return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App
