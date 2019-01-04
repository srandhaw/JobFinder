import React, {Component} from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { MapView } from 'expo';

class MapScreen extends Component{

    state = {
        mapLoaded: false,
        region: {
          latitude: 37,
          longitude: -122,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }
    }

    onRegionChange = (region) =>{
       this.setState({region})
    }

    componentDidMount(){
        this.setState({mapLoaded: true })
    }

    render(){
        if(!this.state.mapLoaded){
            return(
                <View style = {{flex: 1, justifyContent: 'center'}}>
                  <ActivityIndicator size = 'large'/>
                </View>
            )
        }else{
            return(
            <View style = {{flex: 1}}>
            <MapView
            style = {{flex:1 }}
            initialRegion = {{...this.state.region}}
            onRegionChange = {this.onRegionChange}
            />
            </View>
        )
        }
        
    }
}

export default MapScreen