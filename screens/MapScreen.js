import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { MapView } from 'expo';

class MapScreen extends Component{

    state = {
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
    }
    render(){
        return(
            <View style = {{flex: 1}}>
            <MapView
            style = {{flex:1 }}
            initialRegion = {{...this.state.region}}
            />
            </View>
        )
    }
}

export default MapScreen