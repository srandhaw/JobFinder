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
      welcome: {screen: WelcomeScreen},
      auth: {screen: AuthScreen},
      main: {
        screen: createBottomTabNavigator({
           map: {screen: MapScreen},
           deck: {screen: DeckScreen},
           review: {
             screen: createStackNavigator({
                  review: ReviewScreen,
                  settings: SettingsScreen,
             },
             {
    initialRouteName: "review"
            }
             )
           }
        })
      },
    })

const AppContainer = createAppContainer(MainNavigator);

 class App extends React.Component {
  render() {
      return (
      <View style={styles.container}>
       
      </View>
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


export default AppContainer
